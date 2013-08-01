
/* Selectbox */
jQuery.fn.selectbox = function () {
	var all_selects = this;

	function hideAll() {
		all_selects.each(function () {
			this.close();
		});
	}

	jQuery('body').bind('click', function () {
		hideAll();
	});

	return this.each(function () {
		var self = this,
			old_selectbox = jQuery(this),
			select_width = parseInt(old_selectbox.width()) - 2,
			old_options = old_selectbox.find('option'),
			selected_index = getSelectedIndex(old_options),
			wrapper, value_holder,
			new_selectbox_string = '<ul class="new-selectbox">',
			new_selectbox, new_options;

		self.close = function () {
			new_selectbox.slideUp('fast');
			wrapper.css('z-index', 0);
		};

		self.reGen = function () {
			old_options = old_selectbox.find('option');
			new_selectbox.empty();
			new_selectbox_string = [];
			for (var i = 0, len = old_options.length; i < len; i++) {
				new_selectbox_string.push('<li>');
				new_selectbox_string.push(jQuery(old_options[i]).text());
				new_selectbox_string.push('</li>');
			}
			new_selectbox.append(new_selectbox_string.join(''));
			select_width = parseInt(old_selectbox.width()) - 2;
			new_options = new_selectbox.find('li');
			select(jQuery(new_options[0]));
			value_holder.css('width', select_width + 'px');
			new_selectbox.css('width', (select_width - 2) + 'px');
			optionBinder();
		};

		generateNewSelectbox();

		function getSelectedIndex(opts) {
			var index = 0,
				len = opts.length,
				i;
			for (i = 0; i < len; i++) {
				if (jQuery(opts[i]).attr('selected')) {
					index = i;
				}
			}
			return index;
		}

		function generateNewSelectbox() {
			var opt_len = old_options.length,
				i;
			old_selectbox.wrap('<div class="selectbox-wrap" />');
			wrapper = old_selectbox.parent('div.selectbox-wrap');
			for (i = 0; i < opt_len; i++) {
				new_selectbox_string += '<li>' + jQuery(old_options[i]).text() + '</li>';
			}
			new_selectbox_string += '</ul>';
			wrapper.append('<input type="button" class="value-holder" value="' + jQuery(old_options[selected_index]).text() + '">');
			wrapper.append(new_selectbox_string);

			value_holder = wrapper.find('input.value-holder');
			value_holder.css('width', select_width + 'px');
			new_selectbox = wrapper.find('ul.new-selectbox');
			new_selectbox.css('width', (select_width - 2) + 'px');
			new_options = new_selectbox.find('li');
			jQuery(new_options[selected_index]).addClass('selected');
		}

		function select(obj) {
			var index = new_options.index(obj);
			new_options.removeClass('selected');
			obj.addClass('selected');
			old_options.attr('selected', false);
			jQuery(old_options[index]).attr('selected', true);
			value_holder.val(obj.text());
			old_selectbox.change();
		}

		value_holder.bind('click', function (e) {
			e.stopPropagation();
			e.preventDefault();
			if (new_selectbox.css('display') === 'none') {
				hideAll();
			}
			wrapper.css('z-index', '1');
			new_selectbox.slideToggle(100);
		});

		value_holder.bind('keydown', function (e) {
			var selected = new_options.filter('.selected');
			if (e.keyCode === 40) {	// Down Arrow
				e.preventDefault();
				if (selected.next().length) {
					select(selected.next());
				}
			} else if (e.keyCode === 38) {	// Up Arrow
				e.preventDefault();
				if (selected.prev().length) {
					select(selected.prev());
				}
			} else if (e.keyCode === 9) {
				new_selectbox.slideUp(100);
				wrapper.css('z-index', '0');
			}
		});

		optionBinder();

		function optionBinder() {
			new_options.bind('click', function () {
				select(jQuery(this));
				new_selectbox.slideUp(100);
				wrapper.css('z-index', '0');
				// value_holder.focus();
			});
			new_options.hover(function () {
				new_options.removeClass('selected');
				new_options.removeClass('hover');
				jQuery(this).addClass('hover');
			});
		}
		/*
		if (IE && (IE < 8)) {
			wrapper.css('position', 'static');
			var pos = value_holder.position();
			new_selectbox.css({
				position: 'absolute',
				top: (pos.top + 17) + 'px',
				left: pos.left
			});
		}
		*/
		this.newSelect = new_selectbox;
	});
};

// On DOM ready
jQuery(document).ready(function () {
	jQuery('select').selectbox();
});