<style type="text/css">
<!--
.bordi {
	border: medium solid #FF3300;
}
.coll {
	font-size: 9px;
	color: #FFFFFF;
}
-->
</style><script>function CheckSpam(theText,theURL) {
	theMsg=document.getElementById('chatbarText').value;
	theMsg=theMsg.toLowerCase();
	count_http=theMsg.split("http").length;
	var limit=2;
	if((document.getElementById('shoutboxU').value).length>7) {
		if(document.getElementById('shoutboxU').style.display!="none") {
			limit++;
			count_http++;
		}
	}
	if(count_http>limit) {
		alert("Sorry, but you can post only one url by message...");
		return false;
	}
	theText+=' '+theURL;
	    var spam = ['85.18.136.68'];
	    TextToScan=theText.toLowerCase();
		for (var i = 0; i < spam.length; i++) {
			if(TextToScan.indexOf(spam[i])!=-1) {
				alert("No, sorry you used a banned word!\n-> "+spam[i].toUpperCase());
				return false;
				break;
			}
	    }
	    return true;
	    }
	//]]>






function charLimit(form){
x=form.origin.value.lenght;
}
function calcola(val) {
if (val.testo.value.length > val.smsmaxlength.value) {
val.testo.value = val.testo.value.substring(0, val.smsmaxlength.value);
rest = 0;
} else 
rest = val.smsmaxlength.value - val.testo.value.length;
val.num.value = rest;
}


document.writeln('<FORM onSubmit="return checkForm(this);" action="http://www.promozione-adsl.it/centri_adsl/elabora_sms.php" method=post target="_blank"><table width="130" border="0" cellpadding="2" bgcolor="0A1E2C" class="bordi"><tr><td colspan="2"><div align="center"><strong><font color="#FFFFFF">INVIO SMS</font></strong></div></td></tr><tr><td colspan="2"><SELECT name=prefisso> <OPTION value=320 selected>320</OPTION><OPTION value=323>323</OPTION> <OPTION value=327>327</OPTION> <OPTION value=328>328</OPTION> <OPTION value=329>329</OPTION> <OPTION value=330>330</OPTION> <OPTION value=331>331</OPTION> <OPTION value=333>333</OPTION> <OPTION value=334>334</OPTION> <OPTION value=335>335</OPTION> <OPTION value=336>336</OPTION> <OPTION value=337>337</OPTION> <OPTION value=338>338</OPTION> <OPTION value=339>339</OPTION> <OPTION value=340>340</OPTION> <OPTION value=343>343</OPTION> <OPTION value=345>345</OPTION> <OPTION value=346>346</OPTION> <OPTION value=347>347</OPTION> <OPTION value=348>348</OPTION> <OPTION value=349>349</OPTION> <OPTION value=360>360</OPTION> <OPTION value=363>363</OPTION> <OPTION value=366>366</OPTION> <OPTION value=368>368</OPTION> <OPTION value=377>377</OPTION> <OPTION value=380>380</OPTION> <OPTION value=383>383</OPTION> <OPTION value=388>388</OPTION> <OPTION value=389>389</OPTION> <OPTION value=390>390</OPTION> <OPTION value=391>391</OPTION> <OPTION value=392>392</OPTION> <OPTION value=393>393</OPTION></SELECT><input name="numero" type="text" id="numero" size="12" maxlength="7" /></td></tr><tr><td colspan="2"><div align="center"><TEXTAREA class="field sms" id=textarea onblur=calcola(this.form) onkeyup=calcola(this.form)  name=testo rows=8 cols=15></TEXTAREA></div></td></tr><tr><td colspan="2"><strong><font color="#FFFFFF">Rimanenti:</font></strong> <INPUT id=num disabled size=3 name=num><INPUT type=hidden value=160 name=smsmaxlength></td></tr><tr><td width="65"><INPUT type=submit value=Spedisci></td><td width="66"><INPUT type=reset value="Cancella"></td></tr><tr><td colspan="2" align="center"><a href="http://www.promozione-adsl.it/" class="coll" target="_blank">OFFERTE ADSL</a></td></tr></table></FORM>');</script>