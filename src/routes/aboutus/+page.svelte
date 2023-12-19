<script>
import Subname from "../../components/Subname.svelte";
import Name from "../../components/Name.svelte";
</script>

<div class="aboutus">
    <Name>B<span class="and">&</span>B</Name>
    <Subname>About Us</Subname>

    <div>
        <div class="h2">Главные создатели сайта - БИБА и БОБА</div>
        <p></p>
        <div class="h3">*Контактная информация Бибы и Бобы засекречена<br><br></div>
        <p></p>
        <div class="h4">В разработке сайта ему помогали:<br>
            <p></p>
            Хусаинов Эдуард<br>
            Хисымутдинова Регина</div>
    </div>

    <div class="rectangle text">Сайт разработан B&B и студентами БГПУ им. М. Акмуллы в 2023 году</div>
</div>

<style>

    .and {
        font-size: 90px;
    }

    .rectangle {
        margin: 325px 0 0 0;
        width: 100%;
        height: 100px;
        background: black;
    }

    .h2 {
        margin-top: 100px;
        margin-left: 100px;
        font-size: 30px;
        font-family: "Fira Sans", sans-serif;
    }

    .h3 {
        margin-left: 100px;
        font-size: 20px;
        font-family: "Fira Sans", sans-serif;
        font-style: italic;
    }

    .h4 {
        margin-left: 100px;
        font-size: 25px;
        font-family: "Fira Sans", sans-serif;
    }

    .text {
        color: white;
        text-align: center;
        line-height: 100px;
        font-size: 15px;
        text-transform: uppercase;
    }
</style>