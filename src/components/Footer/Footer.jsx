import st from './Footer.module.scss';


const Footer = () => {

    return (
        <footer className={st.footer}>
            <div className={st.footerWrapper}>
                <div className={st.contactBlock}>
                    <svg className={st.phoneIcon} version="1.1" id="Layer_1" x="0px" y="0px"
                         viewBox="0 0 122.88 122.27">
                        <g>
                            <path d="M33.84,50.25c4.13,7.45,8.89,14.6,15.07,21.12c6.2,6.56,13.91,12.53,23.89,17.63c0.74,0.36,1.44,0.36,2.07,0.11 c0.95-0.36,1.92-1.15,2.87-2.1c0.74-0.74,1.66-1.92,2.62-3.21c3.84-5.05,8.59-11.32,15.3-8.18c0.15,0.07,0.26,0.15,0.41,0.21 l22.38,12.87c0.07,0.04,0.15,0.11,0.21,0.15c2.95,2.03,4.17,5.16,4.2,8.71c0,3.61-1.33,7.67-3.28,11.1 c-2.58,4.53-6.38,7.53-10.76,9.51c-4.17,1.92-8.81,2.95-13.27,3.61c-7,1.03-13.56,0.37-20.27-1.69 c-6.56-2.03-13.17-5.38-20.39-9.84l-0.53-0.34c-3.31-2.07-6.89-4.28-10.4-6.89C31.12,93.32,18.03,79.31,9.5,63.89 C2.35,50.95-1.55,36.98,0.58,23.67c1.18-7.3,4.31-13.94,9.77-18.32c4.76-3.84,11.17-5.94,19.47-5.2c0.95,0.07,1.8,0.62,2.25,1.44 l14.35,24.26c2.1,2.72,2.36,5.42,1.21,8.12c-0.95,2.21-2.87,4.25-5.49,6.15c-0.77,0.66-1.69,1.33-2.66,2.03 c-3.21,2.33-6.86,5.02-5.61,8.18L33.84,50.25L33.84,50.25L33.84,50.25z"/>
                        </g>
                    </svg>
                    <a href="tel:+1555555555" className={st.telLink}>
                        +1 (555) 555-5555
                    </a>
                </div>
                <div className={st.contactBlock}>
                    <svg className={st.addressIcon} fill="#000000" version="1.1" id="Capa_1" viewBox="0 0 495.398 495.398">
                        <g>
                            <g>
                                <g>
                                    <path d="M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391
				v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158
				c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747
				c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z"/>
                                    <path d="M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401
				c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79
				c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z"/>
                                </g>
                            </g>
                        </g>
                    </svg>
                    <a className={st.contactText} href="https://www.google.com/maps/place/51+Madison+Ave+Rm+251,+New+York,+NY+10010,+%D0%A1%D0%A8%D0%90/@40.743658,-73.9859419,17z/data=!3m1!5s0x89c25720b8b7aef9:0x602ccc3d2ab4bdf2!4m6!3m5!1s0x89c259a6ff034c6f:0x133a71f7cbed3fd3!8m2!3d40.7430573!4d-73.98617!16s%2Fg%2F11tnfyrptz?shorturl=1">
                        123 Main Street, Suite 500, New York, NY 10001, United States
                    </a>
                    {/*<span className={st.contactText}>123 Main Street, Suite 500, New York, NY 10001, United States</span>*/}
                </div>
                <div className={st.socialIcons}>
                    <a href="https://www.facebook.com" className={st.iconLink}>
                        <svg className={st.contactIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                            <path
                                d="M 25 3 C 12.861562 3 3 12.861562 3 25 C 3 36.019135 11.127533 45.138355 21.712891 46.728516 L 22.861328 46.902344 L 22.861328 29.566406 L 17.664062 29.566406 L 17.664062 26.046875 L 22.861328 26.046875 L 22.861328 21.373047 C 22.861328 18.494965 23.551973 16.599417 24.695312 15.410156 C 25.838652 14.220896 27.528004 13.621094 29.878906 13.621094 C 31.758714 13.621094 32.490022 13.734993 33.185547 13.820312 L 33.185547 16.701172 L 30.738281 16.701172 C 29.349697 16.701172 28.210449 17.475903 27.619141 18.507812 C 27.027832 19.539724 26.84375 20.771816 26.84375 22.027344 L 26.84375 26.044922 L 32.966797 26.044922 L 32.421875 29.564453 L 26.84375 29.564453 L 26.84375 46.929688 L 27.978516 46.775391 C 38.71434 45.319366 47 36.126845 47 25 C 47 12.861562 37.138438 3 25 3 z M 25 5 C 36.057562 5 45 13.942438 45 25 C 45 34.729791 38.035799 42.731796 28.84375 44.533203 L 28.84375 31.564453 L 34.136719 31.564453 L 35.298828 24.044922 L 28.84375 24.044922 L 28.84375 22.027344 C 28.84375 20.989871 29.033574 20.060293 29.353516 19.501953 C 29.673457 18.943614 29.981865 18.701172 30.738281 18.701172 L 35.185547 18.701172 L 35.185547 12.009766 L 34.318359 11.892578 C 33.718567 11.811418 32.349197 11.621094 29.878906 11.621094 C 27.175808 11.621094 24.855567 12.357448 23.253906 14.023438 C 21.652246 15.689426 20.861328 18.170128 20.861328 21.373047 L 20.861328 24.046875 L 15.664062 24.046875 L 15.664062 31.566406 L 20.861328 31.566406 L 20.861328 44.470703 C 11.816995 42.554813 5 34.624447 5 25 C 5 13.942438 13.942438 5 25 5 z"/>
                        </svg>
                    </a>

                    <a href="https://twitter.com" className={st.iconLink}>
                        <svg className={st.contactIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                            <path
                                d="M 34.21875 5.46875 C 28.238281 5.46875 23.375 10.332031 23.375 16.3125 C 23.375 16.671875 23.464844 17.023438 23.5 17.375 C 16.105469 16.667969 9.566406 13.105469 5.125 7.65625 C 4.917969 7.394531 4.597656 7.253906 4.261719 7.277344 C 3.929688 7.300781 3.632813 7.492188 3.46875 7.78125 C 2.535156 9.386719 2 11.234375 2 13.21875 C 2 15.621094 2.859375 17.820313 4.1875 19.625 C 3.929688 19.511719 3.648438 19.449219 3.40625 19.3125 C 3.097656 19.148438 2.726563 19.15625 2.425781 19.335938 C 2.125 19.515625 1.941406 19.839844 1.9375 20.1875 L 1.9375 20.3125 C 1.9375 23.996094 3.84375 27.195313 6.65625 29.15625 C 6.625 29.152344 6.59375 29.164063 6.5625 29.15625 C 6.21875 29.097656 5.871094 29.21875 5.640625 29.480469 C 5.410156 29.742188 5.335938 30.105469 5.4375 30.4375 C 6.554688 33.910156 9.40625 36.5625 12.9375 37.53125 C 10.125 39.203125 6.863281 40.1875 3.34375 40.1875 C 2.582031 40.1875 1.851563 40.148438 1.125 40.0625 C 0.65625 40 0.207031 40.273438 0.0507813 40.71875 C -0.109375 41.164063 0.0664063 41.660156 0.46875 41.90625 C 4.980469 44.800781 10.335938 46.5 16.09375 46.5 C 25.425781 46.5 32.746094 42.601563 37.65625 37.03125 C 42.566406 31.460938 45.125 24.226563 45.125 17.46875 C 45.125 17.183594 45.101563 16.90625 45.09375 16.625 C 46.925781 15.222656 48.5625 13.578125 49.84375 11.65625 C 50.097656 11.285156 50.070313 10.789063 49.777344 10.445313 C 49.488281 10.101563 49 9.996094 48.59375 10.1875 C 48.078125 10.417969 47.476563 10.441406 46.9375 10.625 C 47.648438 9.675781 48.257813 8.652344 48.625 7.5 C 48.75 7.105469 48.613281 6.671875 48.289063 6.414063 C 47.964844 6.160156 47.511719 6.128906 47.15625 6.34375 C 45.449219 7.355469 43.558594 8.066406 41.5625 8.5 C 39.625 6.6875 37.074219 5.46875 34.21875 5.46875 Z M 34.21875 7.46875 C 36.769531 7.46875 39.074219 8.558594 40.6875 10.28125 C 40.929688 10.53125 41.285156 10.636719 41.625 10.5625 C 42.929688 10.304688 44.167969 9.925781 45.375 9.4375 C 44.679688 10.375 43.820313 11.175781 42.8125 11.78125 C 42.355469 12.003906 42.140625 12.53125 42.308594 13.011719 C 42.472656 13.488281 42.972656 13.765625 43.46875 13.65625 C 44.46875 13.535156 45.359375 13.128906 46.3125 12.875 C 45.457031 13.800781 44.519531 14.636719 43.5 15.375 C 43.222656 15.578125 43.070313 15.90625 43.09375 16.25 C 43.109375 16.65625 43.125 17.058594 43.125 17.46875 C 43.125 23.71875 40.726563 30.503906 36.15625 35.6875 C 31.585938 40.871094 24.875 44.5 16.09375 44.5 C 12.105469 44.5 8.339844 43.617188 4.9375 42.0625 C 9.15625 41.738281 13.046875 40.246094 16.1875 37.78125 C 16.515625 37.519531 16.644531 37.082031 16.511719 36.683594 C 16.378906 36.285156 16.011719 36.011719 15.59375 36 C 12.296875 35.941406 9.535156 34.023438 8.0625 31.3125 C 8.117188 31.3125 8.164063 31.3125 8.21875 31.3125 C 9.207031 31.3125 10.183594 31.1875 11.09375 30.9375 C 11.53125 30.808594 11.832031 30.402344 11.816406 29.945313 C 11.800781 29.488281 11.476563 29.097656 11.03125 29 C 7.472656 28.28125 4.804688 25.382813 4.1875 21.78125 C 5.195313 22.128906 6.226563 22.402344 7.34375 22.4375 C 7.800781 22.464844 8.214844 22.179688 8.355469 21.746094 C 8.496094 21.3125 8.324219 20.835938 7.9375 20.59375 C 5.5625 19.003906 4 16.296875 4 13.21875 C 4 12.078125 4.296875 11.03125 4.6875 10.03125 C 9.6875 15.519531 16.6875 19.164063 24.59375 19.5625 C 24.90625 19.578125 25.210938 19.449219 25.414063 19.210938 C 25.617188 18.96875 25.695313 18.648438 25.625 18.34375 C 25.472656 17.695313 25.375 17.007813 25.375 16.3125 C 25.375 11.414063 29.320313 7.46875 34.21875 7.46875 Z"/>
                        </svg>
                    </a>

                    <a href="https://www.instagram.com" className={st.iconLink}>
                        <svg className={st.contactIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                            <path
                                d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"/>
                        </svg>
                    </a>

                    <a href="https://web.telegram.org" className={st.iconLink}>
                        <svg className={st.contactIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                            <path
                                d="M 25 2 C 12.309288 2 2 12.309297 2 25 C 2 37.690703 12.309288 48 25 48 C 37.690712 48 48 37.690703 48 25 C 48 12.309297 37.690712 2 25 2 z M 25 4 C 36.609833 4 46 13.390175 46 25 C 46 36.609825 36.609833 46 25 46 C 13.390167 46 4 36.609825 4 25 C 4 13.390175 13.390167 4 25 4 z M 34.087891 14.035156 C 33.403891 14.035156 32.635328 14.193578 31.736328 14.517578 C 30.340328 15.020578 13.920734 21.992156 12.052734 22.785156 C 10.984734 23.239156 8.9960938 24.083656 8.9960938 26.097656 C 8.9960938 27.432656 9.7783594 28.3875 11.318359 28.9375 C 12.146359 29.2325 14.112906 29.828578 15.253906 30.142578 C 15.737906 30.275578 16.25225 30.34375 16.78125 30.34375 C 17.81625 30.34375 18.857828 30.085859 19.673828 29.630859 C 19.666828 29.798859 19.671406 29.968672 19.691406 30.138672 C 19.814406 31.188672 20.461875 32.17625 21.421875 32.78125 C 22.049875 33.17725 27.179312 36.614156 27.945312 37.160156 C 29.021313 37.929156 30.210813 38.335938 31.382812 38.335938 C 33.622813 38.335938 34.374328 36.023109 34.736328 34.912109 C 35.261328 33.299109 37.227219 20.182141 37.449219 17.869141 C 37.600219 16.284141 36.939641 14.978953 35.681641 14.376953 C 35.210641 14.149953 34.672891 14.035156 34.087891 14.035156 z M 34.087891 16.035156 C 34.362891 16.035156 34.608406 16.080641 34.816406 16.181641 C 35.289406 16.408641 35.530031 16.914688 35.457031 17.679688 C 35.215031 20.202687 33.253938 33.008969 32.835938 34.292969 C 32.477938 35.390969 32.100813 36.335938 31.382812 36.335938 C 30.664813 36.335938 29.880422 36.08425 29.107422 35.53125 C 28.334422 34.97925 23.201281 31.536891 22.488281 31.087891 C 21.863281 30.693891 21.201813 29.711719 22.132812 28.761719 C 22.899812 27.979719 28.717844 22.332938 29.214844 21.835938 C 29.584844 21.464938 29.411828 21.017578 29.048828 21.017578 C 28.923828 21.017578 28.774141 21.070266 28.619141 21.197266 C 28.011141 21.694266 19.534781 27.366266 18.800781 27.822266 C 18.314781 28.124266 17.56225 28.341797 16.78125 28.341797 C 16.44825 28.341797 16.111109 28.301891 15.787109 28.212891 C 14.659109 27.901891 12.750187 27.322734 11.992188 27.052734 C 11.263188 26.792734 10.998047 26.543656 10.998047 26.097656 C 10.998047 25.463656 11.892938 25.026 12.835938 24.625 C 13.831938 24.202 31.066062 16.883437 32.414062 16.398438 C 33.038062 16.172438 33.608891 16.035156 34.087891 16.035156 z"/>
                        </svg>
                    </a>

                    <a href="https://www.viber.com" className={st.iconLink}>
                        <svg className={st.contactIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                            <path
                                d="M 24.425781 3 C 23.0625 3.007813 21.695313 3.089844 20.316406 3.257813 C 17.679688 3.582031 15.066406 4.121094 12.558594 5.273438 C 8.570313 7.105469 5.742188 10.214844 4.921875 14.734375 C 4.574219 16.640625 4.292969 18.574219 4.132813 20.519531 C 3.824219 24.296875 4.015625 28.085938 5.085938 31.808594 C 5.929688 34.742188 7.484375 37.378906 10.207031 39.089844 C 11.359375 39.8125 12.878906 40.164063 13.671875 40.53125 C 13.894531 40.636719 13.949219 40.699219 13.960938 40.714844 C 13.972656 40.726563 14.003906 40.753906 14 40.988281 C 13.972656 43.378906 14 48.003906 14 48.003906 L 14.003906 49 L 15.789063 49 L 16.078125 48.71875 C 16.078125 48.71875 20.613281 44.355469 22.253906 42.558594 C 22.550781 42.238281 22.703125 42.058594 22.734375 42.039063 C 22.761719 42.019531 22.714844 42.007813 23.019531 42 C 25.171875 41.957031 27.320313 41.875 29.46875 41.757813 C 32.300781 41.601563 35.1875 41.332031 37.964844 40.171875 C 40.382813 39.160156 42.402344 37.507813 43.625 35.03125 C 44.875 32.492188 45.542969 29.800781 45.792969 27.015625 C 46.207031 22.378906 46.0625 17.734375 44.78125 13.15625 C 44.027344 10.472656 42.511719 8.203125 40.1875 6.601563 C 37.40625 4.6875 34.269531 3.96875 31.199219 3.511719 C 29.40625 3.246094 27.601563 3.070313 25.789063 3.015625 C 25.335938 3.003906 24.882813 2.996094 24.425781 3 Z M 25.734375 5.015625 C 27.457031 5.0625 29.179688 5.230469 30.90625 5.488281 C 33.867188 5.929688 36.660156 6.601563 39.054688 8.25 C 40.996094 9.585938 42.207031 11.390625 42.855469 13.691406 C 44.050781 17.972656 44.203125 22.359375 43.800781 26.839844 C 43.570313 29.421875 42.957031 31.855469 41.828125 34.148438 C 40.832031 36.171875 39.277344 37.457031 37.191406 38.328125 C 34.769531 39.339844 32.136719 39.609375 29.363281 39.761719 C 27.238281 39.878906 25.109375 39.957031 22.980469 40 C 22.445313 40.011719 21.921875 40.152344 21.550781 40.425781 C 21.179688 40.699219 21.011719 40.953125 20.78125 41.203125 C 19.609375 42.484375 17.273438 44.738281 16 45.972656 C 15.992188 44.480469 15.980469 42.675781 16 41.011719 C 16.007813 40.5 15.890625 39.976563 15.597656 39.5625 C 15.304688 39.148438 14.902344 38.898438 14.515625 38.71875 C 13.386719 38.195313 11.910156 37.796875 11.269531 37.394531 C 9.03125 35.988281 7.761719 33.878906 7.007813 31.253906 C 6.019531 27.820313 5.832031 24.285156 6.125 20.6875 C 6.28125 18.820313 6.550781 16.949219 6.890625 15.09375 C 7.601563 11.183594 9.835938 8.722656 13.390625 7.089844 C 15.636719 6.058594 18.035156 5.550781 20.5625 5.242188 C 22.285156 5.03125 24.007813 4.964844 25.734375 5.015625 Z M 26.15625 10 C 25.332031 10 24.53125 10.09375 23.753906 10.265625 C 23.21875 10.390625 22.878906 10.925781 23 11.464844 C 23.121094 12.003906 23.660156 12.339844 24.199219 12.21875 C 24.828125 12.074219 25.484375 12 26.15625 12 C 31.039063 12 34.976563 15.9375 34.976563 20.816406 C 34.976563 21.492188 34.902344 22.148438 34.757813 22.78125 C 34.636719 23.316406 34.972656 23.855469 35.511719 23.976563 C 36.050781 24.097656 36.585938 23.757813 36.707031 23.21875 C 36.882813 22.445313 36.976563 21.644531 36.976563 20.816406 C 36.976563 14.855469 32.121094 10 26.15625 10 Z M 16.179688 12.003906 C 16.015625 11.996094 15.847656 12.007813 15.671875 12.046875 C 13.855469 12.449219 12.050781 13.765625 12 16.117188 C 12.050781 16.445313 12.046875 16.796875 12.167969 17.09375 C 12.761719 18.546875 13.277344 20.046875 14.019531 21.421875 C 17.632813 28.101563 23.097656 32.746094 30.0625 35.695313 C 30.894531 36.046875 31.753906 36.121094 32.59375 35.769531 C 33.75 35.289063 34.730469 34.546875 35.382813 33.480469 C 36.277344 32.015625 36.289063 31 34.816406 29.917969 C 33.851563 29.207031 32.902344 28.476563 31.925781 27.78125 C 30.4375 26.726563 28.828125 26.542969 27.71875 28.394531 C 27.660156 28.488281 27.574219 28.566406 27.5 28.644531 C 26.929688 29.25 26.230469 29.398438 25.488281 29.09375 C 22.671875 27.933594 20.496094 26.0625 19.183594 23.277344 C 18.410156 21.640625 18.621094 20.820313 20.066406 19.730469 C 20.210938 19.625 20.347656 19.511719 20.480469 19.390625 C 21.113281 18.8125 21.28125 18.125 20.90625 17.347656 C 20.058594 15.574219 18.929688 13.992188 17.5 12.628906 C 17.113281 12.261719 16.671875 12.03125 16.179688 12.003906 Z M 26.140625 13 C 25.699219 13 25.261719 13.035156 24.832031 13.109375 C 24.46875 13.15625 24.160156 13.398438 24.027344 13.738281 C 23.894531 14.082031 23.960938 14.46875 24.195313 14.75 C 24.433594 15.027344 24.808594 15.15625 25.167969 15.078125 C 25.480469 15.027344 25.808594 15 26.140625 15 C 29.390625 15 32 17.609375 32 20.859375 C 32 21.191406 31.972656 21.519531 31.921875 21.832031 C 31.84375 22.191406 31.972656 22.566406 32.25 22.804688 C 32.53125 23.039063 32.917969 23.105469 33.261719 22.972656 C 33.601563 22.839844 33.84375 22.53125 33.890625 22.167969 C 33.964844 21.738281 34 21.300781 34 20.859375 C 34 16.53125 30.46875 13 26.140625 13 Z M 26 16 C 25.640625 15.996094 25.304688 16.183594 25.121094 16.496094 C 24.941406 16.808594 24.941406 17.191406 25.121094 17.503906 C 25.304688 17.816406 25.640625 18.003906 26 18 C 27.667969 18 29 19.332031 29 21 C 28.996094 21.359375 29.183594 21.695313 29.496094 21.878906 C 29.808594 22.058594 30.191406 22.058594 30.503906 21.878906 C 30.816406 21.695313 31.003906 21.359375 31 21 C 31 18.25 28.75 16 26 16 Z"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div className={st.rights}>&#169; All rights reserved</div>
        </footer>
    )
}

export default Footer;