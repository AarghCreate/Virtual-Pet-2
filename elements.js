class elements
{
    constructor()
    {
        this.add = createButton("add food");
        this.feed = createButton("Feed the dog");
        this.name = createInput("name");
    }
    hide()
    {
        this.add.hide();
        this.feed.hide();
        this.name.hide();
    }
    show()
    {
        this.add.show();
        this.feed.show();
        this.name.show();
    }
    pos()
    {
        this.add.position( 750 , 70 );
        this.feed.position( 380 , 70 );
        this.name.position( 525 , 350 );
    }
    press()
    {
        this.add.mousePressed( ()=>{
                                    setfood(val+1);    
                                    } );
        this.feed.mousePressed( ()=>{
                                    writeStock( val );
                                    dog = null; 
                                    } );
    }
    display()
    {
        this.show();
        this.pos();
        this.press();
    }
}