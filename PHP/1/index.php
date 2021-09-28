<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>тестовое задание ИНТЕРВОЛГА</title>

  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <style>


  </style>
</head>
<body>

<?
$a = 'ВАШИНГТОН -- Президент США Джо Байден выступил на саммите мировых лидеров COVID-19 в среду (22 сентября) с обещанием пожертвовать дополнительные 500 миллионов доз вакцины странам, ведущим борьбу с пандемией. «Это глобальный кризис, — сказал он. — Точно так же, как во время Второй мировой войны, когда Америка была арсеналом для торжества демократии, в борьбе с пандемией коронавируса наша страна станет арсеналом вакцин». Президент Джо Байден на саммите по вопросам борьбы с COVID-19 обещал довести до 1,1 миллиарда количество вакцин, предоставленных США в нуждающиеся страны. Это больше, чем совокупная помощь всех остальных стран. Байден участвовал в саммите по видео-связи из Белого дома. «Мы уже отправили 160 млн доз вакцины в 100 стран. На каждую прививку, сделанную на сегодня в Америке, мы обязуемся предоставить три вакцины другим странам», — заявил президент США. В настоящее время ожидается новый транш в полмиллиарда вакцин Pfizer в страны с низким и средним уровнем жизни. Байден также призывает мировых лидеров вакцинировать 70% населения всех стран к сентябрю 2022 года, говорится в заявлении Белого дома. «Нужно, чтобы другие страны с высоким уровнем доходов также выполняли свои намерения. Этот кризис невозможно разрешить половинчатыми мерами». Байден подчеркнул, что вакцины должны передаваться исключительно на безвозмездной основе, без какой-либо «политической» выгоды — завуалированный намек, в частности, на действия Китая. Китай начал проводить свою так называемую «вакцинную дипломатию» в прошлом году, когда президент Си Цзиньпин пообещал предоставить вакцины, которые можно легко хранить и доставлять миллионам людей во всем мире, особенно в бедные страны. Он назвал китайскую вакцину «общественным благом», и это определение начали повторять другие лидеры партии. Однако многие страны скептически относятся к этому проявлению доброй воли со стороны Китая. Они видят в этом всего лишь попытку Пекина претендовать в дальнейшем на их территорию и природные ресурсы. По данным AFP, полученным из официальных источников, с момента начала вспышки в Китае в декабре 2019 года во всем мире погибли около 4,7 миллиона человек.';
//$a = 'ВАШИНГТОН -- Президент США';
$link = '/news/1';

ellipsis($a, 180); //ВЫВОД РЕЗУЛЬТАТА

function ellipsis($text, $limit){
    global $link;
    
    //Если кол-во символов в тексте меньше лимита тогда вывести полный текст без многоточия и полной ссылкой
    if (strlen($text) < $limit){
        echo '<a href="' . $link . '">' . $text . '</a>';
        return;
    }

    $b = mb_strimwidth($text, 0, $limit, "...");
    $b_arr = explode(' ', $b);
    $last_words = implode(' ', array_slice($b_arr, -2));

    echo str_replace($last_words, '', $b) . ' ' . '<a href="' . $link . '">' . $last_words . '</a>';
}
?>

</body>
</html>