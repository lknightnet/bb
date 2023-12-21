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

</script>

<div class="manager">
    <Name>B<span class="and">&</span>B</Name>
    <Subname>Task Manager</Subname>

    <div class="rectangle-block">
        <center>{nameProjectOne}</center>
        <p>
            {descriptionProjectOne}
        </p>
    </div>
    <div class="rectangle-block1">
        <button class="new">Новый проект</button>
    </div>
    <div class="rectangle-block2">
        <button class="new">Новый проект</button>
    </div>
    <div class="rectangle-block3">
        <button class="new">Новый проект</button>
    </div>
</div>

<style>
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
    }
</style>