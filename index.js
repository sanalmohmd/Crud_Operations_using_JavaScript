
var mytodo_list=["do exercise","take bath","have breakfast"];

/*create*/
function createtask(){
    var task=document.getElementById("add-task").value;
    mytodo_list.push(task);
    readalltask();
}

/*read*/

function readalltask(){
    var data="";
    for(var i =0;i<mytodo_list.length;i++){
        
        data+='<tr>';
        data+='<td>' + mytodo_list[i] + '</td>';
        data+='<td><button onclick=updatetask(' +i+ ')>update</button></td>';
        data+='<td><button onclick=deletetask('+i+')>delete</button></td>';
        data+='</tr>';

    }
    /*counter*/
    document.getElementById("counter").innerHTML=mytodo_list.length +"task";
    document.getElementById("mytodo-tasks").innerHTML=data; 
}
readalltask();

/*update*/ 

function updatetask(item){
    document.getElementById("updateform").style.display='block';
    document.getElementById("update-task").value=mytodo_list[item];
    document.getElementById("updateform").onsubmit=function(){

        var task=document.getElementById("update-task").value;
        mytodo_list.splice(item,1,task.trim());

        readalltask();
        closeinput();

    }
}

/*delete*/

function deletetask(item)
{
    mytodo_list.splice(item,1);
    readalltask();

}

function closeinput()
{
    document.getElementById("updateform").style.display='none';
}