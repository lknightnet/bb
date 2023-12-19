<script>
    import Subname from "../../components/Subname.svelte";
    import Name from "../../components/Name.svelte";
    import {onMount} from "svelte";
    import Border from "../../components/Border.svelte";
    import Circle from "../../components/Circle.svelte";
    import NavButton from "../../components/NavButton.svelte";

    let uuid = "";
    let nickname = "";

    onMount(() => {
            uuid = localStorage.getItem("uuid")
            nickname = localStorage.getItem("nickname")
        }
    )


</script>

<div class="profile">
    <Name>B<span class="and">&</span>B</Name>
    <Subname>Profile</Subname>

    <Border style="width: 720px;height: 720px;top: 520px;left: -170px;border:1px solid #629C5D;filter: blur(3px);"></Border>
    <Circle style="width: 720px;height: 720px;top: 500px;left: -150px;filter: blur(3px);"></Circle>

    <Border style="width: 300px;height: 300px;top: 180px;left: -120px;border: 1px solid #629C5D;filter: blur(3px);"></Border>
    <Circle style="width: 300px;height: 300px;top: 200px;left: -100px;filter: blur(3px);"></Circle>

    <Border style="width: 150px;height: 150px;top: 330px;left: 240px;border: 1px solid #629C5D;filter: blur(3px);"></Border>
    <Circle style="width: 150px;height: 150px;top: 320px;left: 250px;filter: blur(3px);"></Circle>

    <img class="avatar" alt="Здесь аватарка, но она не работает." src="/profile-icon.jpg"> 
    <div class="nickname">{nickname}</div>
    <div class="uuid">ID: {uuid}</div>

    <button type="submit" class="btn-exit">Выйти</button>

    <NavButton/>

</div>

<style>
    .and {
        font-size: 90px;
    }

    .avatar {
        width: 200px;
        height: 200px;
        background: white;
        border-radius: 50%;
        position: absolute;
        /* border: 1px solid black; */
        top: 270px;
        left: 350px;
        box-shadow: 0 0 10px #444;
    }

    .nickname {
        color:black;
        font: 30px "Fira Sans", sans-serif;
        margin: 90px 0 0 600px;
    }

    .uuid {
        color:black;
        font: 20px "Fira Sans", sans-serif;
        margin: 10px 0 0 600px;
    }

    .btn-exit{
        border-radius: 10px;
        border: none;
        color: #fff;
        display: block;
        width: 130px;
        text-align: center;
        font-size: 15px;
        padding: 8px 20px;
        margin: 170px 0 0 380px;
        text-decoration: none;
        background-color: #629C5D;
    }

</style>