<div class="main">
    <Name>B<span class="and">&</span>B</Name>
    <Subname>Your personal assistant</Subname>

    <div class="container">
        <OMButton id="manager" style="left: -250px;top: 100px;">
            Task Manager<br><br>
            Создайте свой профиль
            и добавляйте<br>
            новые задачи в одном месте<br>
            THE FUNCTION DOES NOT WORK
        </OMButton>


        <OMButton id="messenger" style="left: 400px;top: -80px;">
            Messenger<br><br>
            Переписывайтесь с друзьями<br>
            и обсуждайте проекты вместе<br>
            THE FUNCTION DOES NOT WORK
        </OMButton>


        <OMButton id="music" style="left: -250px;top: 100px;">
            Music<br><br>
            Слушайте вашу любимую музыку,<br>
            пока обсуждаете проекты<br>
            THE FUNCTION DOES NOT WORK
        </OMButton>


        <OMButton id="signup" style="left: 400px;top: -80px;">
            Registration<br><br>
            Создайте свой уникальный профиль
        </OMButton>


        <OMButton id="aboutus" style="left: 220px;top: 250px;">
            О нас
        </OMButton>
    </div>


    <Border style="width: 720px;height: 720px;top: 520px;left: -170px;border-color:#ffffff;"></Border>
    <Circle style="width: 720px;height: 720px;top: 500px;left: -150px;"></Circle>

    <Border style="width: 300px;height: 300px;top: 180px;left: -120px;border-color:#ffffff;"></Border>
    <Circle style="width: 300px;height: 300px;top: 200px;left: -100px;"></Circle>

    <Border style="width: 150px;height: 150px;top: 330px;left: 240px;border-color:#ffffff;"></Border>
    <Circle style="width: 150px;height: 150px;top: 320px;left: 250px;"></Circle>
</div>

<script>
    import Name from "../components/Name.svelte";
    import Subname from "../components/Subname.svelte";
    import Border from "../components/Border.svelte";
    import Circle from "../components/Circle.svelte";
    import OMButton from "../components/OMButton.svelte";
</script>

<style>
    .and {
        font-size: 90px;
    }

    .container{
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        position: relative;
        text-align: center;
    }
</style>