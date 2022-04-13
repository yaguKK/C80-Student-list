student_array=[];
function submit(){
    var display_array=[];
    for(var j=1; j<=4; j++ ){
        var student=document.getElementById("name_of_the_student_"+j).value;
        console.log(student);
        student_array.push(student);

    }
    console.log(student_array);
    for(var k=0; k<4; k++){
        display_array.push("<h4> NAME-"+student_array[k]+"</h4>");
        console.log(display_array);

    }
    console.log(display_array);
    document.getElementById("display_name_with_commas").innerHTML=remove_commas;
    var remove_commas = display_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=display_array;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){
    student_array.sort();
    console.log(student_array);
    var display_array_sorted= [];

    for(var k=0; k<4; k++){
        display_array_sorted.push("<h4> NAME-"+student_array[k]+"</h4>");
        console.log(display_array_sorted);
        
    }
    var remove_commas = display_array_sorted.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
}