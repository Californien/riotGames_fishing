<template>

    <div class="blur"></div>
    <div class="mainbox">
        <h1>Ein Fehler ist aufgetreten.</h1>
    </div>

</template>

<style lang="scss">

    .blur {
        width: 100%;
        height: 100vh;
        position: absolute;
        left: 0;
        top: 0;
        background-color: rgba(0, 0, 0, 0.05);
        animation: backgroundBlur 0.8s ease-in-out forwards;
    }

    @keyframes backgroundBlur {
        0% {
            backdrop-filter: blur(0px);
            background-size: 100%;
        }
        100% {
            backdrop-filter: blur(20px);
            background-size: 120%;
        }
    }
    
    .mainbox {
        width: 624px;
        height: 556.47px;
        background-color: white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform-origin: center;
        transform: translate(-52%, -52%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h1 {
            position: relative;
            bottom: 50px;
        }
    }

</style>