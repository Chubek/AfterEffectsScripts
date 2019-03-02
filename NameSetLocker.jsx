var activeComp = app.project.activeItem;
for (var i = 1; i <= activeComp.numLayers; i++) {
       var layer = activeComp.layer(i);

        if (!layer.isNameSet)
        {
               layer.locked = true;
         }
       
       
    
    }
