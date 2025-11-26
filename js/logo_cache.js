function get_cached_logo(link,mediaThumbnail,source_feed="") {

    if(link.includes("washingtonpost.com")){
        mediaThumbnail =  "images/cached_logos/wapo.webp";
    } else if (link.includes("economist.com")) {
        mediaThumbnail =  "images/cached_logos/economist.png";
    } else if (link.includes("nytimes.com")) {
        mediaThumbnail =  "images/cached_logos/nyt.jpg";
    } else if (link.includes("wsj.com")) {
        mediaThumbnail =  "images/cached_logos/wsj.png";
    } else if (link.includes("npr.org")) {
        mediaThumbnail =  "images/cached_logos/npr.png";
    } else if (link.includes("techdirt.com")) {
        mediaThumbnail =  "images/cached_logos/techdirt.jpg";
    } else if (link.includes("screenrant.com")) {
        mediaThumbnail =  "images/cached_logos/screenrant.png";
    } else if (link.includes("mcsweeneys.net")) {
        mediaThumbnail =  "images/cached_logos/mcsweenys.jpg";
    } else if (link.includes("techcrunch.com")) {
        mediaThumbnail =  "images/cached_logos/techcrunch.jpg";
    } else if (link.includes("wgbh.org")) {
        mediaThumbnail =  "images/cached_logos/gbh.png";
    } else if (link.includes("masslawyersweekly.com")) {
        mediaThumbnail =  "images/cached_logos/malawyersweekly.png";
    } else if (link.includes("abovethelaw.com")) {
        mediaThumbnail =  "images/cached_logos/atl.png";
    } else if (link.includes("latimes.com")) {
        mediaThumbnail =  "images/cached_logos/latimes.png";
    } else if (link.includes("theatlantic.com")) {
        mediaThumbnail =  "images/cached_logos/atlantic.png";
    } else if (link.includes("bbc.co")) {
        mediaThumbnail =  "images/cached_logos/bbc.jpg";
    } else if (link.includes("lightspeedmagazine.com")) {
        mediaThumbnail =  "images/cached_logos/lightspeed.png";
    } else if (link.includes("clarkesworldmagazine.com")) {
        mediaThumbnail =  "images/cached_logos/clarkesworld.jpg";
    } else if (link.includes("escapepod.org")) {
        mediaThumbnail =  "images/cached_logos/escapepod.jpg";
    } else if (link.includes("rollingstone.com")) {
        mediaThumbnail =  "images/cached_logos/rollingstone.png";
    } else if (link.includes("ssrn.com")) {
        mediaThumbnail = "images/cached_logos/ssrn.png"
    } else if (link.includes("arstechnica.com")) {
        mediaThumbnail = "images/cached_logos/arstechnica.png"
    } else if (link.includes("technologyreview.com")) {
        mediaThumbnail = "images/cached_logos/mittechreview.png"
    } else if (link.includes("nautil.us")) {
        mediaThumbnail = "images/cached_logos/nautilus.png"
    } else if (link.includes("smithsonianmag.com")) {
        mediaThumbnail = "images/cached_logos/smithsonianmag.png"
    } else if (link.includes("propublica.org")) {
        mediaThumbnail = "images/cached_logos/propublica.png"
    } else if (link.includes("schneier.com")) {
        mediaThumbnail = "images/cached_logos/schneier.jpg"
    } else if (link.includes("scientificamerican.com")) {
        mediaThumbnail = "images/cached_logos/sciam.png"
    } else if (link.includes("lexblog.com")) {
        mediaThumbnail = "images/cached_logos/lexblog.png"
    } else if (link.includes("artificiallawyer.com")) {
        mediaThumbnail = "images/cached_logos/al.png"
    } else if (link.includes("suffolklitlab.org")) {
        mediaThumbnail = "images/cached_logos/lit.png"
    } else if (link.includes("eff.org")) {
        mediaThumbnail = "images/cached_logos/eff.png"
    } else if (link.includes("arxiv.org")) {
        mediaThumbnail = "images/cached_logos/arxiv.png"
    } else if (link.includes("lawfaremedia.org")) {
        mediaThumbnail = "images/cached_logos/lawfare.png"
    } else if (link.includes("yourarlington.com")) {
        mediaThumbnail = "images/cached_logos/yourarlington.png"
    } else if (link.includes("boston.com")) {
        mediaThumbnail = "images/cached_logos/boston.com.png"
    } else if (link.includes("ft.com")) {
        mediaThumbnail = "images/cached_logos/ft.png"
    } else if (link.includes("chronicle.com")) {
        mediaThumbnail = "images/cached_logos/chronicle.png"
    } else if (link.includes("timharford.com")) {
        mediaThumbnail = "images/cached_logos/timharford.png"
    } else if (link.includes("legaltechmonitor.com")) {
        mediaThumbnail = "images/cached_logos/legal_tech_mon.png"
    } else if (link.includes("theinformation.com")) {
        mediaThumbnail = "images/cached_logos/theinformation.png"
    } else if (link.includes("anildash.com")) {
        mediaThumbnail = "images/cached_logos/anildash.png"
    } else if (link.includes("heathercoxrichardson")) {
        mediaThumbnail = "images/cached_logos/heathercoxrichardson.png"
    } else if (link.includes("theconversation.com")) {
        mediaThumbnail = "images/cached_logos/theconversation.png"
    } else if (source_feed.includes("hnrss.org")) {
         mediaThumbnail =  "images/cached_logos/hackernews.jpeg";
    } else if (source_feed.includes("cloudcroftreader.com")) {
         mediaThumbnail =  "images/cached_logos/cloudcroftreader.png";
    } else if (source_feed.includes("aedileworks.com")) {
         mediaThumbnail =  "images/cached_logos/aedileworks.png";
    }
   
    return mediaThumbnail
}