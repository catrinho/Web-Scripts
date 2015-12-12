<?php
include 'xmlToArray.php';

$url = 'http://www.diarioinsular.com/rss/iphone.asp'; 
$xmlNode = simpleXML_load_file($url,"SimpleXMLElement",LIBXML_NOCDATA); 

//$xmlNode = simplexml_load_file('example.xml');
$arrayData = xmlToArray($xmlNode);

//$obj = arrayToObject($arrayData['rss']['channel']);


$obj = json_encode($arrayData['rss']['channel']['item']);

echo('<pre>');
print_r($obj);
echo('</pre>');

?>