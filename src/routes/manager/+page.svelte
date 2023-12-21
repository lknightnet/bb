<script>
    import Subname from "../../components/Subname.svelte";
    import Name from "../../components/Name.svelte";
    import {onMount} from "svelte";
    import {fetchRefresh} from "$lib/refresh.js";

    let nameProjectOne = "";
    let descriptionProjectOne = "";

    onMount(async () => {
        const res = await fetchRefresh("http://localhost:8000/manager/project/get/1", {
            method:"GET",
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        });

        if (res.ok){
            const obj = await res.json();
            nameProjectOne = obj.name;
            descriptionProjectOne = obj.description_of_project;
        }
    });

    let show = false;

    function clickToDivOne(){
        show = true;
    }

</script>

<div class="manager">
    <Name>B<span class="and">&</span>B</Name>
    <Subname>Task Manager</Subname>
  
    <div class="rectangle-block">
        <a href="#" on:click={clickToDivOne}>
            <center>{nameProjectOne}</center>
            <p>
                {descriptionProjectOne}
            </p>

            <a href="#"><img class="gear" src="/gear.png" style="width: 30px; heigh:30px"></a>
        </a>
    </div>

    {#if show === true}

        <div class="notes">ЗДЕСЬ ПИСАТЬ ЭТУ ТАБЛИЧКУ.</div>

    {:else if show === false}

        <div class="rectangle-block1">
            <button class="new">Новый проект</button>
        </div>
        <div class="rectangle-block2">
            <button class="new">Новый проект</button>
        </div>
        <div class="rectangle-block3">
            <button class="new">Новый проект</button>
        </div>

    {/if}
</div>
<!-- <div>
    <div id="zatemnenie">
        <div id="okno">
          <a href="#" class="close">×</a>
          ID
        </div>
      </div>
       
      <a href="#zatemnenie">Свойства</a>
</div> -->


<style>
    .gear{
        position: relative;
        top: -30px;
        left: 220px;
    }
    .and {
        font-size: 90px;
    }

    .rectangle-block {
        width:250px;
        height:500px;
        padding:30px 20px;
        background:#BBE7B7;
        border: 1px solid;
        color:#000;
        text-align:left;
        font-size:20px;
        line-height:1.8;
        margin:50px 0 0 90px;
        border-radius: 15px;
    }

    .rectangle-block1 {
        width:250px;
        height:500px;
        padding:30px 20px;
        background:#BBE7B7;
        border: 1px solid;
        color:#000;
        text-align:left;
        font-size:20px;
        line-height:1.8;
        margin:-562px 0 0 440px;
        border-radius: 15px;
    }

    .rectangle-block2 {
        width:250px;
        height:500px;
        padding:30px 20px;
        background:#BBE7B7;
        border: 1px solid;
        color:#000;
        text-align:left;
        font-size:20px;
        line-height:1.8;
        margin:-562px 0 0 790px;
        border-radius: 15px;
    }

    .rectangle-block3 {
        width:250px;
        height:500px;
        padding:30px 20px;
        background:#BBE7B7;
        border: 1px solid;
        color:#000;
        text-align:left;
        font-size:20px;
        line-height:1.8;
        margin:-562px 0 0 1140px;
        border-radius: 15px;
    }

    .new{
        background-color: #629C5D;
        font-size: 20px;
        display: block;
        margin: 0 auto;
        border-radius: 15px;
        color: white;
        width: 160px;
        height: 40px;
        border: none;
    }
    /* #zatemnenie {
        background: rgba(102, 102, 102, 0.5);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        display: none;
    }
    #okno {
        width: 500px;
        height: 300px;
        text-align: left;
        padding: 15px;
        border-radius: 10px;
        color: black;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        background: #BBE7B7;
        box-shadow: 0 0 10px #444;
    }
    #zatemnenie:target {
        display: block;
    }

    .close {
        display: inline-block;
        border: none;
        height: 30px;
        width: 30px;
        border-radius: 20px;
        color: white;
        padding: 0;
        margin: 0 0 0 470px;
        text-decoration: none;
        text-align: center;
        font: 30px "Fira Sans", sans-serif;
        background: #629C5D;
        font-size: 20pt;
        cursor:pointer;
    } */

</style>