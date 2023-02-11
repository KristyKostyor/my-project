let newHashtag=prompt('Придумай хештег!');

function creatHashtag() {
    if(newHashtag==='')
    console.log(false)
    else{
        let str = newHashtag.split(/\s+/);
    for ( i = 0; i < str.length; i++) {
        if (str[i] != ""){
        str[i] = str[i][0].toUpperCase() + str[i].slice(1);
    } 
}
    let hashtag = "#" + str.join("");
    alert(`Ваш хештег создан: "  ${hashtag}`);
    }
}
creatHashtag();