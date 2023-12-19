<div class="om-button">
    <a href={"/" + id} style={stylish}>
        <slot/>
    </a>
</div>


<style>
    .om-button{
        height: 100%;
        padding: 0;
        font-family: 'Open Sans', sans-serif;

        display: block;
        float:left;
        margin: 1% 0 1% 1.6%;
    }

    .om-button:before, .om-button:after{
        content: " ";
        display: table;
    }

    .om-button:after{
        clear: both;
    }

    .om-button>a{
        text-decoration: none;

        display: inline-block;
        padding: 20px 50px;
        margin: 10px 10px;
        position: relative;
        color:  #000000;
        text-align: left;
        z-index: 4;

        overflow: hidden;
        font: 22px "Fira Sans", sans-serif;
    }

    .om-button>a:before, .om-button>a:after{
        content: "";
        position: absolute;
        width: 100%;
        height: 3px;
        background-color: #629C5D;
        top: 0;
        left: -100%;
        -webkit-transition: all 0.3s ease-in-out;
        -o-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
    }

    .om-button>a:after{
        bottom: 0 !important;
        top: auto !important;
        right: -100%;
        left: auto;
    }

    .om-button>a:hover:before{
        left: 0;
    }

    .om-button>a:hover:after{
        right: 0;
    }
</style>

<script>
    export let id = ""
    let stylish = $$props.style
</script>