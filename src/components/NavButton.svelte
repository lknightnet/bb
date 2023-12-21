<div class="nav-button">
    <ul class="nav" style={stylish}>
        <li><a href="/manager">Task Manager</a></li>
        <li><a href="/messenger">Messenger</a></li>
        <li><a href="/music">Music</a></li>
        <li><a href="/profile">Profile</a></li>
    </ul>
</div>

<style>
    ul.nav {
        list-style: none;
        margin: -350px 0 0 400px;
    }
    .nav li {
        float: left;
    }
    ul.nav a {
        display: block;
        width: 130px;
        padding: 10px;
        margin: 0 50px;
        text-decoration: none;
        color: black;
        text-align: center;
        background: none;
        font: 20px "Fira Sans", sans-serif;
    }
    ul.nav a:hover{
        background: none;
        color: red;
    }
</style>

<script>
    let stylish = $$props.style
</script>