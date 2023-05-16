/*

    Build Button Here.

*/
function themeSwitch() {
    let dark = document.getElementById("toggle").checked;
    console.log(dark);

    let background = title = text = card = theme = image = "";
    if (dark) {
        /* ==== Light Mode ==== */
        background = "var(--background-light)";
        title = "var(--title-light)";
        text = "var(--text-light)";
        card = "var(--card-light)";
        theme = "var(--secondary)";
        image = "url(static/img/coffeecupblue-bg.jpg)";
    }
    else {
        /* ==== Dark Mode ==== */
        background = "var(--background-dark)";
        title = "var(--title-dark)";
        text = "var(--text-dark)";
        card = "var(--card-dark)";
        theme = "var(--primary)";
        image = "url(static/img/coffeecup-bg.jpg)";
    }

    /* ======= Change hero background image ======== */
    document.getElementsByClassName("bg-image")[0].style.backgroundImage = image;

    /* ======= Change body background and text color ===== */
    let body = document.getElementsByTagName("body")[0];
    body.style.background = background;
    body.style.color = text;

    /* ====== Change background of card boxes ======= */
    document.getElementsByClassName("box-shadow-full")[0].style.background = card;
    let work_box = document.getElementsByClassName("work-box");
    for (let i = 0; i < work_box.length; i++) {
        work_box[i].style.background = card;
    }

    /* ====== Change color of titles and subtitles ======== */
    let w_titles = document.getElementsByClassName("w-title");
    for (let i = 0; i < w_titles.length; i++) {
        w_titles[i].style.color = text;
    }
    let title_left = document.getElementsByClassName("title-left")[0];
    title_left.style.color = title;
    title_left.style.setProperty("--primary", "#0f70b5"); /* <-- pseudo-element */
    document.getElementsByClassName("skill-mf")[0].getElementsByTagName("span")[0].style.color = text;
    let subtitle_a = document.getElementsByClassName("subtitle-a");
    for (let i = 0; i < subtitle_a.length; i++) {
        subtitle_a[i].style.color = text;
    }
    let title_s = document.getElementsByClassName("title-s");
    for (let i = 0; i < title_s.length; i++) {
        title_s[i].style.color = title;
    }

    /* ======= Change theme of overlay, lines, and buttons background ======= */
    document.getElementsByClassName("overlay-mf")[0].style.background = theme;
    let line_mf = document.getElementsByClassName("line-mf");
    for (let i = 0; i < line_mf.length; i++) {
        line_mf[i].style.background = theme;
    }
    document.getElementsByClassName("back-to-top")[0].style.background = theme;

    /* ====== Portfolio category and links ======= */
    let w_category = document.getElementsByClassName("w-ctegory");
    for (let i = 0; i < w_category.length; i++) {
        w_category[i].style.color = theme;
    }
    let links = document.getElementsByClassName("w-like");
    for (let i = 0; i < links.length; i++) {
        links[i].getElementsByTagName("a")[0].style.color = theme;
    }

    /* ====== Change About social icons background ===== */
    let social_button = document.getElementsByClassName("personal_social")[0].getElementsByTagName("a");
    for (let i = 0; i < social_button.length; i++) {
        social_button[i].style.background = theme;
    }

}