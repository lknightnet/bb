<div class="signup">
    <Name>B<span class="and">&</span>B</Name>
    <Subname>Registration</Subname>

    <Border style="width: 720px;height: 720px;top: 520px;left: -170px;border:1px solid #629C5D;filter: blur(3px);"></Border>
    <Circle style="width: 720px;height: 720px;top: 500px;left: -150px;filter: blur(3px);"></Circle>

    <Border style="width: 300px;height: 300px;top: 180px;left: -120px;border: 1px solid #629C5D;filter: blur(3px);"></Border>
    <Circle style="width: 300px;height: 300px;top: 200px;left: -100px;filter: blur(3px);"></Circle>

    <Border style="width: 150px;height: 150px;top: 330px;left: 240px;border: 1px solid #629C5D;filter: blur(3px);"></Border>
    <Circle style="width: 150px;height: 150px;top: 320px;left: 250px;filter: blur(3px);"></Circle>

    <form on:submit={signup} novalidate>
        <div class="text-field">
            <label class="text-field__label" for="name">Имя</label>
            <input class="text-field__input" bind:value={data.name} type="text" id="name" placeholder="Введите имя">
        </div>

        <div class="text-filed">
            <label class="text-field__label" for="email">Email</label>
            <input class="text-field__input" bind:value={data.email} type="text" id="Email" placeholder="Введите email">
        </div>

        <div class="text-field">
            <label class="text-field__label" for="password">Пароль</label>
            <input class="text-field__input" bind:value={data.password} type="password" id="password" placeholder="Введите пароль">
        </div>

        <button type="submit" class="btn-signup">Регистрация</button>
        <a href="/login" class="a-btn-auth">Есть аккаунт</a>
    </form>


</div>


<script>
    import Subname from "../../components/Subname.svelte";
    import Name from "../../components/Name.svelte";
    import Border from "../../components/Border.svelte";
    import Circle from "../../components/Circle.svelte";

    let data = {
        name: "",
        email: "",
        password: "",
    };

    async function signup() {
        try {
            const responseSignup = await fetch("http://localhost:8002/signup", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
                mode: "cors",
                credentials: "same-origin"
            });

            if (responseSignup.ok){
                let obj = await responseSignup.json()
                localStorage.setItem("nickname", obj.name);
                localStorage.setItem("uuid", obj.uuid);
            }

            const responseLogin = await fetch("http://localhost:8002/login",{
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
                mode: "cors",
                credentials: "same-origin"
            });

            if (responseLogin.ok){
                localStorage.setItem("token", responseLogin.headers.get("Authorization"))
                window.location.href = "/profile"
            }
        } catch (err){
            console.log(err)
        }
    }

</script>

<style>

    .and {
        font-size: 90px;
    }

    .btn-signup{
        border-radius: 10px;
        color: #fff;
        display: block;
        width: 130px;
        text-align: center;
        font-size: 15px;
        padding: 8px 20px;
        margin: 40px auto;
        text-decoration: none;
        background-color: #629C5D;
    }

    .a-btn-auth{
        color: black;
        display: block;
        width: 130px;
        text-align: center;
        font-size: 20px;
        padding: 8px 20px;
        margin: -30px auto;
        text-decoration: none;
        background-color: transparent;
    }

    .text-field {
        margin-bottom: 1rem;
    }

    .text-field__label {
        display: block;
        /* margin-bottom: 0.25rem; */
        color: transparent;
    }

    .text-field__input {
        display: block;
        width: 350px;
        height: calc(2.25rem + 2px);
        font-family: inherit;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #212529;
        background-color: #BBE7B7;
        background-clip: padding-box;
        border: 1px solid black;
        border-radius: 10px;
        margin: 10px auto;
        /* margin-left: 40%; */
        box-sizing: border-box;
        padding: 1rem;
    }

    .text-field__input::placeholder {
        color: #629C5D;
    }

    .text-field__input:focus {
        color: #212529;
        background-color: #BBE7B7;
        outline: 0;
    }

    .text-field__input:disabled{
        background-color: #f5f5f5;
        opacity: 1;
    }

</style>