package kr.lawsn;

import java.util.HashMap;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;

public class Test {

	public static void main(String[] args) {

		String _pcinfo_by_xecureweb = "p1=192.15.40.110$$$r1=192.15.40.110$$$rx=n$x1=NA$x2=NA$l1=llllllllllll$l2=l2222222222222$l3=00-1F-3B-31-38-C7$m1=$m2=00-1F-C6-84-AB-FB$$vy=n$h1=S0Z3NEAC900155$$$c1=BFEBFBFF00010676$mb=BSN12345678901234567$os=Microsoft Windows XP 32bit SP3$vt=$gm=98-D8-8C-65-60-47$gi=127.0.0.1$mf=n$hv=FC5F1A67$";
		
		String[] _return = new String[3];
		_return[0] = "";
		_return[1] = "FFFFFFFFFFFF";
		_return[2] = "";
		
		Map<String, String> pcInfoKTB = new HashMap<String, String>();
		
		/* 소프트포럼 암호화가 된다면 복화화를 처리해야 한다. */
		String sPcInfo = _pcinfo_by_xecureweb;

		// KTB 정보를 MAP에 저장한다.
		String[] _pc_infos = StringUtils.split(sPcInfo, "$");
		for (int i=0; i<_pc_infos.length; i++)
		{
			String[] tempPcInfo = _pc_infos[i].split("=");
			if(tempPcInfo != null && tempPcInfo.length == 2)
			{
				pcInfoKTB.put(tempPcInfo[0], tempPcInfo[1]);
			}
		}
		
		/*
		 * KTB 모듈 KEY 목록
		 * IP : p1, p2, p3
		 * 논리MAC : l1, l2, l3
		 * 물리MAC : m1, m2, m3
		 * HDD : h1, h2, h3
		 */
		// IP 정보 설정
		if(StringUtils.isNotBlank(pcInfoKTB.get("p1")))
		{
			_return[0] = pcInfoKTB.get("p1");
		}
		else if(StringUtils.isNotBlank(pcInfoKTB.get("p2")))
		{
			_return[0] = pcInfoKTB.get("p2");
		}
		else if(StringUtils.isNotBlank(pcInfoKTB.get("p3")))
		{
			_return[0] = pcInfoKTB.get("p3");
		}
		
		// MAC 정보 설정 ([물리MAC] -있으면 논리MAC 무시 모든 물리MAC, -없다면 모든 논리MAC)
		if(StringUtils.isNotBlank(pcInfoKTB.get("m1")))
		{
			_return[1] = pcInfoKTB.get("m1");
		}
		if(StringUtils.isNotBlank(pcInfoKTB.get("m2")))
		{
			_return[1] += (StringUtils.isNotBlank(_return[1]) ? ";" : "") + pcInfoKTB.get("m2");
		}
		if(StringUtils.isNotBlank(pcInfoKTB.get("m3")))
		{
			_return[1] += (StringUtils.isNotBlank(_return[1]) ? ";" : "") + pcInfoKTB.get("m3");
		}
		if(StringUtils.isBlank(_return[1]))
		{
			if(StringUtils.isNotBlank(pcInfoKTB.get("l1")))
			{
				_return[1] = pcInfoKTB.get("l1");
			}
			if(StringUtils.isNotBlank(pcInfoKTB.get("l2")))
			{
				_return[1] += (StringUtils.isNotBlank(_return[1]) ? ";" : "") + pcInfoKTB.get("l2");
			}
			if(StringUtils.isNotBlank(pcInfoKTB.get("l3")))
			{
				_return[1] += (StringUtils.isNotBlank(_return[1]) ? ";" : "") + pcInfoKTB.get("l3");
			}
		}
		if(StringUtils.isNotBlank(_return[1]))
		{
			_return[1] = _return[1].toUpperCase().replaceAll("-", "");
		}
		
		// HDD 정보 설정
		if(StringUtils.isNotBlank(pcInfoKTB.get("h1")))
		{
			_return[2] = pcInfoKTB.get("h1");
		}
		else if(StringUtils.isNotBlank(pcInfoKTB.get("h2")))
		{
			_return[2] = pcInfoKTB.get("h2");
		}
		else if(StringUtils.isNotBlank(pcInfoKTB.get("h3")))
		{
			_return[2] = pcInfoKTB.get("h3");
		}
		
		System.out.println("_return[0] : IP = " + _return[0]);
		System.out.println("_return[1] : MAC = " + _return[1]);
		System.out.println("_return[2] : HDD = " + _return[2]);
	}
}
