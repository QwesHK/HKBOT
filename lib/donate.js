exports.donate = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `ЁЯФ░ -----[ *MENU DONASI ${BotName}* ]----- ЁЯФ░
  
Hi, *${id.split("@s.whatsapp.net")[0]}* ЁЯСЛя╕П
Mau donasi? 

тЪая╕П *${tampilTanggal}*
тЪая╕П *${tampilWaktu}*

тЩ╗ Silahkan donasi dibawah ini :
   
тЪЬ *OVO*: -
тЪЬ *DANA*: -
тЪЬ *PULSA*: 0838-0744-9268
тЪЬ *GOPAY*: -

ЁЯУ║ *Iklan* :

тЬЕ Follow akun instagram admin ${instagramlu}

тЪая╕П INFORMASI COVID-19 TERBARU!

тЪая╕П POSITIF: *${corohelp.confirmed.value}*
тЪая╕П SEMBUH: *${corohelp.recovered.value}*
тЪая╕П MENINGGAL: *${corohelp.deaths.value}*
тЪая╕П UPDATE: *${corohelp.lastUpdate}*

тЩ╗я╕П _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_

тЩ╗я╕П Mau pasang iklan di *${BotName} ?*
тШОя╕П WA : *${whatsapplu}*
  
тЪая╕П Gunakan dengan bijak тА╝я╕П
тЪая╕П Bot ini berjalan ${kapanbotaktif} тА╝я╕П

тЬ│я╕П Official Grub [1] : ${grupch1}

тЬ│я╕П Official Grub [2] : ${grupch2}

  
ЁЯФ░ -----[ *POWERED BY ${BotName}* ]----- ЁЯФ░`
}
