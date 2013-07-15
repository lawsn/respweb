package kr.lawsn.common;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

import org.apache.struts2.dispatcher.ng.filter.StrutsPrepareAndExecuteFilter;

public class TestFilterDispatcher extends StrutsPrepareAndExecuteFilter {

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
		
		System.out.println("##### TestFilterDispatcher INIT #####");
		super.init(filterConfig);
	}
	
	@Override
	public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
		
		System.out.println("##### TestFilterDispatcher doFilter #####");
		super.doFilter(req, res, chain);
	}

}
