<template>

    <div id="FOOTER">
        <div class="section links"></div>
        <div class="section eula">
            <p>DIESE SEITE WIRD DURCH HCAPTCHA GESCHÜTZT UND ES GELTEN DESSEN <a href="https://www.hcaptcha.com/privacy" target="_blank">DATENSCHUTZERKLÄRUNG</a> SOWIE DIE <a href="https://www.hcaptcha.com/terms" target="_blank">NUTZUNGSBEDINGUNGEN</a>.</p>
        </div>
    </div>

</template>

<style lang="scss">

    #FOOTER {
        .eula {
            p {
                font-weight: 800;
                letter-spacing: 0.08em;
                line-height: 130%;
                font-size: 8.9px;
                color: rgb(173, 173, 173);
                a {
                    color: rgb(235, 235, 235, 0.9);
                    text-decoration: underline;
                }
            }
        }
    }

</style>

<script lang="ts" setup></script>