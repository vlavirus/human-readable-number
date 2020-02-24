module.exports = function toReadable (number) {
    let answer = [];

    if ( number === 0 ) {
        return 'zero';
    }

    let word_stat = new Map;

    word_stat.set(1,"one").set(2,"two").set(3,"three").set(4,"four").set(5,"five").set(6,"six").set(7,"seven").set(8,"eight")
        .set(9,"nine").set(10,"ten").set(11,"eleven").set(12,"twelve").set(13,"thirteen").set(14,"fourteen").set(15,"fifteen")
        .set(16,"sixteen").set(17,"seventeen").set(18,"eighteen").set(19,"nineteen").set(20,"twenty").set(30,"thirty").set(40,"forty")
        .set(50,"fifty").set(60,"sixty").set(70,"seventy").set(80,"eighty").set(90,"ninety").set(100,"one hundred").set(200,"two hundred")
        .set(300,"three hundred").set(400,"four hundred").set(500,"five hundred").set(600,"six hundred").set(700,"seven hundred")
        .set(800,"eight hundred").set(900,"nine hundred");

    if ( number <= 20 ) {
        answer.push(word_stat.get(number));
        
        return answer;
    }

    let hundreds = (Math.floor(number/100))*100;
    let dozens = Math.floor((number - hundreds)/10)*10;
    let units = number - hundreds - dozens;
    
    if ( dozens == 10 ) {
        dozens += units
        answer.push(word_stat.get(hundreds), word_stat.get(dozens));
    } else {
        answer.push(word_stat.get(hundreds), word_stat.get(dozens), word_stat.get(units));
    }
    
    return answer.join(' ').trim().replace(/ {1,}/g," ");
}
