<template>

    <div id="FOOTER">
        <div class="section links">
            <a href="https://support.riotgames.com/hc/de" target="_blank">SUPPORTER</a>
            <a href="https://www.riotgames.com/de/privacy-notice-DE" target="_blank">DATENSCHUTZHINWEIS</a>
            <a href="https://www.riotgames.com/de/terms-of-service-DE" target="_blank">NUTZUNGSBEDINGUNGEN</a>
            <a href="">COOKIE-EINSTELLUNGEN</a>
            <button><span>EN</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.994 0C2.682 0 0 2.688 0 6C0 9.312 2.682 12 5.994 12C9.312 12 12 9.312 12 6C12 2.688 9.312 0 5.994 0ZM10.152 3.6H8.382C8.19 2.85 7.914 2.13 7.554 1.464C8.658 1.842 9.576 2.61 10.152 3.6ZM6 1.224C6.498 1.944 6.888 2.742 7.146 3.6H4.854C5.112 2.742 5.502 1.944 6 1.224ZM1.356 7.2C1.26 6.816 1.2 6.414 1.2 6C1.2 5.586 1.26 5.184 1.356 4.8H3.384C3.336 5.196 3.3 5.592 3.3 6C3.3 6.408 3.336 6.804 3.384 7.2H1.356ZM1.848 8.4H3.618C3.81 9.15 4.086 9.87 4.446 10.536C3.342 10.158 2.424 9.396 1.848 8.4ZM3.618 3.6H1.848C2.424 2.604 3.342 1.842 4.446 1.464C4.086 2.13 3.81 2.85 3.618 3.6ZM6 10.776C5.502 10.056 5.112 9.258 4.854 8.4H7.146C6.888 9.258 6.498 10.056 6 10.776ZM7.404 7.2H4.596C4.542 6.804 4.5 6.408 4.5 6C4.5 5.592 4.542 5.19 4.596 4.8H7.404C7.458 5.19 7.5 5.592 7.5 6C7.5 6.408 7.458 6.804 7.404 7.2ZM7.554 10.536C7.914 9.87 8.19 9.15 8.382 8.4H10.152C9.576 9.39 8.658 10.158 7.554 10.536ZM8.616 7.2C8.664 6.804 8.7 6.408 8.7 6C8.7 5.592 8.664 5.196 8.616 4.8H10.644C10.74 5.184 10.8 5.586 10.8 6C10.8 6.414 10.74 6.816 10.644 7.2H8.616Z" fill="#ADADAD"></path></svg>
            </button>
        </div>
        <div class="section eula">
            <p>DIESE SEITE WIRD DURCH HCAPTCHA GESCHÜTZT UND ES GELTEN DESSEN <a href="https://www.hcaptcha.com/privacy" target="_blank">DATENSCHUTZERKLÄRUNG</a> SOWIE DIE <a href="https://www.hcaptcha.com/terms" target="_blank">NUTZUNGSBEDINGUNGEN</a>.</p>
        </div>
    </div>

</template>

<style lang="scss">

    #FOOTER {
        position: absolute;
        bottom: 60px;
        left: 50px;
        padding-left: 20px; 
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 0.5rem;
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
        .links {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 0.8rem;
            a {
                color: rgb(173, 173, 173);
                font-size: 10.24px;
                font-weight: 800;
                letter-spacing: 0.08em;
                line-height: 100%;
                white-space: nowrap;
                text-decoration: none;
                &:hover {
                    color: rgb(235, 235, 235, 0.9);
                }
            }
            button {
                width: 50px;
                height: 27.5px;
                border-radius: 6px;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                appearance: none;
                background-color: rgba(235, 235, 235, 0.2);
                border: 0;
                &:hover {
                    background-color: rgba(235, 235, 235, 0.25);
                }
                span {
                    margin-right: 0.4em;
                    font-weight: 800;
                    letter-spacing: 0.08em;
                    color: rgb(173, 173, 173);
                    font-size: 10.24px;
                }
            }
        }
    }

</style>

<script lang="ts" setup></script>