/*

    Build Button Here.

*/
function themeSwitch() {

    // Get boolean value of input checkbox.
    let dark = document.getElementById("toggle").checked;

    // Declare color variables then initialize.
    let background = title = text = card = theme = image = line = coffee = "";
    if (dark) {
        /* ------------------------------------
        # Light Mode 
        ------------------------------------*/
        background = "var(--background-light)";
        title = "var(--title-light)";
        text = "var(--text-light)";
        card = "var(--card-light)";
        theme = "var(--secondary)";
        image = "url(static/img/coffeecupblue-bg.jpg)";
        line = "#0f70b5";
        coffee = "#083c61";
    }
    else {
        /*-----------------------------------
        # Dark Mode
        -----------------------------------*/
        background = "var(--background-dark)";
        title = "var(--title-dark)";
        text = "var(--text-dark)";
        card = "var(--card-dark)";
        theme = "var(--primary)";
        image = "url(static/img/coffeecup-bg.jpg)";
        line = "#f0551e";
        coffee = "#b03e15";
    }

    /*-----------------------------------
    # Hero Image
    -----------------------------------*/
    document.getElementsByClassName("bg-image")[0].style.backgroundImage = image;

    /*-----------------------------------
    # Background and Text
    -----------------------------------*/
    let body = document.getElementsByTagName("body")[0];
    body.style.background = background;
    body.style.color = text;

    /*-----------------------------------
    # Card Boxes
    -----------------------------------*/
    document.getElementsByClassName("box-shadow-full")[0].style.background = card;
    let work_box = document.getElementsByClassName("work-box");
    for (let i = 0; i < work_box.length; i++) {
        work_box[i].style.background = card;
    }

    /*----------------------------------
    # Titles and Subtitles
    ----------------------------------*/
    let w_titles = document.getElementsByClassName("w-title");
    for (let i = 0; i < w_titles.length; i++) {
        w_titles[i].style.color = text;
    }
    let title_left = document.getElementsByClassName("title-left")[0];
    title_left.style.color = title;
    title_left.style.setProperty("--primary", line); /* <-- pseudo-element */
    document.getElementsByClassName("skill-mf")[0].getElementsByTagName("span")[0].style.color = text;
    let subtitle_a = document.getElementsByClassName("subtitle-a");
    for (let i = 0; i < subtitle_a.length; i++) {
        subtitle_a[i].style.color = text;
    }
    let title_s = document.getElementsByClassName("title-s");
    for (let i = 0; i < title_s.length; i++) {
        title_s[i].style.color = title;
    }

    /*-----------------------------------
    # Overlay, Lines, and Buttons
    -----------------------------------*/
    document.getElementsByClassName("overlay-mf")[0].style.background = theme;
    let line_mf = document.getElementsByClassName("line-mf");
    for (let i = 0; i < line_mf.length; i++) {
        line_mf[i].style.background = theme;
    }
    document.getElementsByClassName("back-to-top")[0].style.background = theme;

    /*---------------------------------
    # Categories and Links
    ---------------------------------*/
    let w_category = document.getElementsByClassName("w-ctegory");
    for (let i = 0; i < w_category.length; i++) {
        w_category[i].style.color = theme;
    }
    let links = document.getElementsByClassName("w-like");
    for (let i = 0; i < links.length; i++) {
        links[i].getElementsByTagName("a")[0].style.color = theme;
    }

    /*--------------------------------
    # Social Icons in About Me
    --------------------------------*/
    let social_button = document.getElementsByClassName("personal_social")[0].getElementsByTagName("a");
    for (let i = 0; i < social_button.length; i++) {
        social_button[i].style.background = theme;
    }

    /*---------------------------------
    # Coffee Maker
    ---------------------------------*/
    document.getElementsByClassName("upper")[0].style.borderTop = "70px solid " + theme;
    document.getElementsByClassName("back")[0].style.backgroundColor = coffee;
    document.getElementsByClassName("tray")[0].style.backgroundImage = "radial-gradient(" + coffee + " 5px, transparent 6px)";
    document.getElementsByClassName("lower")[0].style.backgroundColor = theme;

}