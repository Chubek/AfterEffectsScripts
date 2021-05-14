w = new Window("palette");

w.group_time_start = w.add ('group');
w.group_time_start.add ('statictext {text: "Start Time: (sec)"}');
w.input_time_start = w.group_time_start.add ('edittext {characters: 10 , active: true}');

w.group_time_end = w.add ('group');
w.group_time_end.add ('statictext {text: "End Time: (sec)"}');
w.input_time_end = w.group_time_end.add ('edittext {characters: 10 , active: true}');

w.group_interval = w.add ('group');
w.group_interval .add ('statictext {text: "Interval (Portion Percentage)"}');
w.input_interval = w.group_interval .add ('edittext {characters: 2 , active: true}');

w.group_op_btn_x = w.add('group {alignment: "right"}');
w.btn_x_op = w.group_op_btn_x.add('button {text: "Rotate X on Intervals", enabled: true}')

w.btn_x_op.onClick = function() {   
        var start = parseInt(w.input_time_start.text);;
        var end = parseInt(w.input_time_end.text);
        var interval =  parseInt(w.input_interval.text);
        var x_rot = app.project.activeItem.activeCamera.xRotation;
     
        var portion = (end - start)  * (interval / 100);

        var i = start;
    
        while (i < end) { 
            x_rot.setValueAtTime(i , 360);
            x_rot.setValueAtTime(i + 0.1, 0);              
            i += portion;           
        }               
 }              

w.group_op_btn_y = w.add('group {alignment: "right"}');
w.btn_y_op = w.group_op_btn_y.add('button {text: "Rotate Y on Intervals", enabled: true}')

w.btn_y_op.onClick = function() {   
    var start = parseInt(w.input_time_start.text);
    var end = parseInt(w.input_time_end.text);
    var interval = parseInt(w.input_interval.text);
    var y_rot = app.project.activeItem.activeCamera.yRotation;
    
    var portion = (end - start)  * (interval / 100);

    var i = start;
    
     while (i < end) { 
               y_rot.setValueAtTime(i , 360);
              y_rot.setValueAtTime(i + 0.1, 0);              
              i += portion;           
            }       
    }


w.group_op_btn_z = w.add('group {alignment: "right"}');
w.btn_z_op = w.group_op_btn_z.add('button {text: "Rotate Z on Intervals", enabled: true}')

w.btn_z_op.onClick = function() {   
    var start = parseInt(w.input_time_start.text);
    var end = parseInt(w.input_time_end.text);
    var interval = parseInt(w.input_interval.text);
    var z_rot = app.project.activeItem.activeCamera.zRotation;
    
    var portion = (end - start)  * (interval / 100);

    var i = start;
    
     while (i < end) { 
              z_rot.setValueAtTime(i , 360);
              z_rot.setValueAtTime(i + 0.1, 0);              
              i += portion;           
            }       
    }


w.show()