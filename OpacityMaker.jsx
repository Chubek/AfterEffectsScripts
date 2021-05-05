//create window
w = new Window("palette");

//global opacity button
w.button_go = w.add ('group {alignment: "center"}');
w.btn_go = w.button_go.add ('button {text: "Make Global Opacity 0", enabled: true}');

//global opacity function. Sets start of the layer, and the current time swiper to 0 with keyframes. When using this control, swipe  the time marker to the end
w.btn_go.onClick = function() {
        var myLayer = app.project.activeItem.layer(1);
        var myProperty = myLayer.opacity;
        myProperty.setValueAtTime(0, 0);
        myProperty.setValueAtTime(myLayer.time, 0);

    }

//time controls
w.group_time_start = w.add ('group');
w.group_time_start.add ('statictext {text: "Start Time: (sec)"}');
w.input_time_start = w.group_time_start.add ('edittext {characters: 10 , active: true}');

w.group_time_end = w.add ('group');
w.group_time_end.add ('statictext {text: "End Time: (sec)"}');
w.input_time_end = w.group_time_end.add ('edittext {characters: 10 , active: true}');


w.group_op_btn = w.add('group {alignment: "right"}');
w.btn_op = w.group_op_btn.add('button {text: "Operate", enabled: true}')

//main function
w.btn_op.onClick = function() {   
        //time variables
        var start = parseInt(w.input_time_start.text);
        var end = parseInt(w.input_time_end.text);
        
        //layer and property controls
        var myLayer = app.project.activeItem.layer(1);
        var myProperty = myLayer.opacity;
        
        myProperty.setValueAtTime(start - 0.01, 0);
        myProperty.setValueAtTime(end, 0);
        
        //the loop that creates keyframes in each 0.1 second between start and end
        i = start
        
        while (i < end) {              
              myProperty.setValueAtTime(i, 100);
              i += 0.1;           
            }
            
        
    }

w.show()