
const urlParams = new URLSearchParams(window.location?.search);
const language = urlParams.get('lang') ?? 'en'

const message = `     
                    <h2 class="en textCenter heading  animate__animated animate__fadeInUp">
                         ${language == 'hi' ? `आपकी फसल का स्मार्ट समाधान!` : language == 'pa' ? `ਤੁਹਾਡੇ ਫ਼ਸਲਾਂ ਲਈ ਸਮਾਰਟ ਹੱਲ!` : `Smart Solution for Your Crops!`}
                    </h2>
                    <p class="en des textCenter  animate__animated animate__fadeInUp">
                        ${language == 'hi' ? `आपकी खेती के लिए आधुनिक और प्रभावी समाधान! आज ही रजिस्टर करें और स्मार्ट खेती की ओर पहला कदम बढ़ाएं!` : language == 'pa' ? `ਤੁਹਾਡੇ ਖੇਤੀ ਲਈ ਆਧੁਨਿਕ ਅਤੇ ਪ੍ਰਭਾਵਸ਼ਾਲੀ ਹੱਲ! ਅੱਜ ਹੀ ਰਜਿਸਟਰ ਕਰੋ ਅਤੇ ਸਮਾਰਟ ਖੇਤੀ ਵੱਲ ਪਹਿਲਾ ਕਦਮ ਚੁੱਕੋ!` : `Register today and take the first step towards smart farming!`}
                    </p>
            `;

const form = `<div class="inputBox animate__animated animate__fadeInUp">

                ${language == 'hi' ? `<label for="name" class="hi">नाम</label>` : language == 'pa' ? `<label for="name" class="pa">ਪੰਜਾਬੀ</label>` : `<label for="name" class="en">Name</label>`}

                <div class="inputConatainer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        class="injected-svg"
                        data-src="https://cdn.hugeicons.com/icons/user-sharing-twotone-rounded.svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="inherit">
                        <path d="M7.78256 17.1112C6.68218 17.743 3.79706 19.0331 5.55429 20.6474C6.41269 21.436 7.36872 22 8.57068 22H15.4293C16.6313 22 17.5873 21.436 18.4457 20.6474C20.2029 19.0331 17.3178 17.743 16.2174 17.1112C13.6371 15.6296 10.3629 15.6296 7.78256 17.1112Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M15.5 10C15.5 11.933 13.933 13.5 12 13.5C10.067 13.5 8.5 11.933 8.5 10C8.5 8.067 10.067 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10Z" stroke="currentColor" stroke-width="1.5"></path>
                        <path opacity="0.4" d="M2.854 16C2.30501 14.7664 2 13.401 2 11.9646C2 6.46129 6.47715 2 12 2C17.5228 2 22 6.46129 22 11.9646C22 13.401 21.695 14.7664 21.146 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
                    </svg>

                    ${language == 'hi' ? `<input class="hi" type="text" id="name" name="name"  placeholder="आपका नाम" />` : language == 'pa' ? `<input class="pa" type="text" id="name" name="name"  placeholder="ਤੁਹਾਡਾ ਨਾਮ" />` : `<input class="en" type="text" id="name" name="name"  placeholder="Your Name" />`}

                </div>

                ${language == 'hi' ? `<span class="errorLabel hi">आवश्यक डेटा</span>` : language == 'pa' ? `<span class="errorLabel pa">ਇਸ ਫੀਲਡ ਦੀ ਲੋੜ ਹੈ</span>` : `<span class="errorLabel en">Required field</span>`}

                </div>

                <div class="inputBox animate__animated animate__fadeInUp">

                    ${language == 'hi' ? `<label for="phone" class="hi">फ़ोन नंबर</label>` : language == 'pa' ? `<label for="phone" class="pa">ਫੋਨ ਨੰਬਰ</label>` : `<label for="phone" class="en">Mobile No</label>`}

                    <div class="inputConatainer">

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            class="injected-svg" data-src="https://cdn.hugeicons.com/icons/calling-twotone-rounded.svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="inherit">
                            <path  d="M3.77762 11.9424C2.8296 10.2893 2.37185 8.93948 2.09584 7.57121C1.68762 5.54758 2.62181 3.57081 4.16938 2.30947C4.82345 1.77638 5.57323 1.95852 5.96 2.6524L6.83318 4.21891C7.52529 5.46057 7.87134 6.08139 7.8027 6.73959C7.73407 7.39779 7.26737 7.93386 6.33397 9.00601L3.77762 11.9424ZM3.77762 11.9424C5.69651 15.2883 8.70784 18.3013 12.0576 20.2224M12.0576 20.2224C13.7107 21.1704 15.0605 21.6282 16.4288 21.9042C18.4524 22.3124 20.4292 21.3782 21.6905 19.8306C22.2236 19.1766 22.0415 18.4268 21.3476 18.04L19.7811 17.1668C18.5394 16.4747 17.9186 16.1287 17.2604 16.1973C16.6022 16.2659 16.0661 16.7326 14.994 17.666L12.0576 20.2224Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path>
                            <path opacity="0.4"  d="M14 6.83185C15.4232 7.43624 16.5638 8.57677 17.1682 10M14.654 2C18.1912 3.02076 20.9791 5.80852 22 9.34563" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
                        </svg>

                        ${language == 'hi' ? `<input class="hi" type="tel" id="phone" name="phone"  placeholder="XXXX XXX XXX" />` : language == 'pa' ? `<input class="pa" type="tel" id="phone" name="phone"  placeholder="XXXX XXX XXX" />` : `<input class="en" type="tel" id="phone" name="phone"  placeholder="XXXX XXX XXX" />`}

                    </div>

                    ${language == 'hi' ? `<span class="errorLabel hi">अमान्य मोबाइल नंबर</span>` : language == 'pa' ? `<span class="errorLabel pa">ਅਵੈਧ ਮੋਬਾਈਲ ਨੰਬਰ</span>` : `<span class="errorLabel en">Invalid Mobile Number</span>`}

                </div>

                <div class="inputBox animate__animated animate__fadeInUp">

                    ${language == 'hi' ? `<label for="name" class="hi">पता</label>` : language == 'pa' ? `<label for="name" class="pa">ਪਤਾ</label>` : `<label for="name" class="en">Address</label>`}


                    <div class="inputConatainer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            class="injected-svg"
                            data-src="https://cdn.hugeicons.com/icons/location-04-twotone-rounded.svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" role="img" color="inherit">
                            <path opacity="0.4" d="M7 18C5.17107 18.4117 4 19.0443 4 19.7537C4 20.9943 7.58172 22 12 22C16.4183 22 20 20.9943 20 19.7537C20 19.0443 18.8289 18.4117 17 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
                            <path d="M14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9Z" stroke="currentColor" stroke-width="1.5"></path>
                            <path d="M13.2574 17.4936C12.9201 17.8184 12.4693 18 12.0002 18C11.531 18 11.0802 17.8184 10.7429 17.4936C7.6543 14.5008 3.51519 11.1575 5.53371 6.30373C6.6251 3.67932 9.24494 2 12.0002 2C14.7554 2 17.3752 3.67933 18.4666 6.30373C20.4826 11.1514 16.3536 14.5111 13.2574 17.4936Z" stroke="currentColor" stroke-width="1.5"></path>
                        </svg>

                        ${language == 'hi' ? `<input class="hi" type="text" id="address" name="address"  placeholder="आपका पता" />` : language == 'pa' ? `<input class="pa" type="text" id="address" name="address"  placeholder="ਤੁਹਾਡਾ ਪਤਾ" />` : `<input class="en" type="text" id="address" name="address"  placeholder="Address" />`}

                    </div>

                    ${language == 'hi' ? `<span class="errorLabel hi">आवश्यक डेटा</span>` : language == 'pa' ? `<span class="errorLabel pa">ਇਸ ਫੀਲਡ ਦੀ ਲੋੜ ਹੈ</span>` : `<span class="errorLabel en">Required field</span>`}

                </div>


                <div class="consentBlock animate__animated animate__fadeInUp">
                    <input type="checkbox" name="consent" id="consent" checked />
                    ${language == 'hi' ? `<label for="consent" class="hi">सहमति देकर, आप हमारी <a href="https://agriwings.in/terms-conditions" target="_blank">शर्तों और नीतियों</a> को स्वीकार करते हैं। </label>` : language == 'pa' ? `<label for="consent" class="pa">ਸਹਿਮਤੀ ਦੇ ਕੇ, ਤੁਸੀਂ ਸਾਡੀਆਂ <a href="https://agriwings.in/terms-conditions" target="_blank">ਸ਼ਰਤਾਂ ਅਤੇ ਨੀਤੀਆਂ</a> ਨੂੰ ਸਵੀਕਾਰ ਕਰਦੇ ਹੋ।</label>` : `<label for="consent" class="en">By agreeing, you accept our <a href="https://agriwings.in/terms-conditions" target="_blank">Terms and Policies</a>.</label>`}
                </div>


                <button class="submitButton animate__animated animate__fadeInUp" type="submit">
                    ${language == 'hi' ? 'जमा करें' : language == 'pa' ? 'ਜਮ੍ਹਾਂ ਕਰੋ' : 'Submit'}
                </button>
`;


const successMessage = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1080 1080" class="animate__animated animate__fadeInUp">
                <defs>
                    <linearGradient id="linear-gradient" x1="389.14" y1="191.87" x2="640.85" y2="772.73"
                        gradientUnits="userSpaceOnUse">
                        <stop offset="0" stop-color="#39b54a"></stop>
                        <stop offset="1" stop-color="#006837"></stop>
                    </linearGradient>
                    <filter id="drop-shadow-1" filterUnits="userSpaceOnUse">
                        <feOffset dx="5" dy="24"></feOffset>
                        <feGaussianBlur result="blur" stdDeviation="5"></feGaussianBlur>
                        <feFlood flood-color="#000" flood-opacity=".33"></feFlood>
                        <feComposite in2="blur" operator="in"></feComposite>
                        <feComposite in="SourceGraphic"></feComposite>
                    </filter>
                </defs>
                <path fill="url(#linear-gradient)"
                    style="animation: rotate 15000ms linear infinite; transform-origin: center;"
                    d="m627.19,199.06h0c23.61,25.72,57.36,39.7,92.24,38.21h0c69.29-2.96,126.26,54.01,123.3,123.3h0c-1.49,34.88,12.49,68.63,38.21,92.24h0c51.09,46.9,51.09,127.48,0,174.37h0c-25.72,23.61-39.7,57.36-38.21,92.24h0c2.96,69.29-54.01,126.26-123.3,123.3h0c-34.88-1.49-68.63,12.49-92.24,38.21h0c-46.9,51.09-127.48,51.09-174.37,0h0c-23.61-25.72-57.36-39.7-92.24-38.21h0c-69.29,2.96-126.26-54.01-123.3-123.3h0c1.49-34.88-12.49-68.63-38.21-92.24h0c-51.09-46.9-51.09-127.48,0-174.37h0c25.72-23.61,39.7-57.36,38.21-92.24h0c-2.96-69.29,54.01-126.26,123.3-123.3h0c34.88,1.49,68.63-12.49,92.24-38.21h0c46.9-51.09,127.48-51.09,174.37,0Z">
                </path>
                <path fill="#fff" style="filter: url(#drop-shadow-1)"
                    d="m344.39,510.08h0c20.44-20.44,53.59-20.44,74.03,0l49.58,49.58c10.75,10.75,28.07,11.11,39.25.81,51.27-47.21,102.55-94.42,153.82-141.63,21.43-19.73,54.84-18.17,74.34,3.46.83.92,1.66,1.84,2.48,2.75,19.38,21.5,17.63,54.64-3.9,73.98-64.63,58.07-129.25,116.14-193.88,174.21-32.79,29.46-83.01,27.67-113.62-4.04l-82.77-85.76c-19.82-20.54-19.53-53.18.65-73.37Z">
                </path>
            </svg>
            <h3 class="animate__animated animate__fadeInUp textCenter heading en">${language == 'hi' ? 'धन्यवाद!' : language == 'pa' ? 'ਧੰਨਵਾਦ!' : 'Thank You!'}</h3>
            <p class="animate__animated animate__fadeInUp textCenter des en">${language == 'hi' ? `दर्ज की गई जानकारियाँ सफलतापूर्वक AgriWings के साथ पंजीकृत हो गई हैं।` : language == 'pa' ? `ਦਾਖਲ ਕੀਤੇ ਗਏ ਵੇਰਵੇ ਸਫਲਤਾਪੂਰਵਕ AgriWings ਨਾਲ <br />ਰਜਿਸਟਰ ਹੋ ਗਏ ਹਨ।` : `Entered details registered successfully<br>with AgriWings.`}</p>
            ${true ? '' : `<button type="button" class="qq animate__animated animate__fadeInUp ">Okay</button>`}
            `;

const setLoading = (state) => {
    const loadingView = document.getElementById("loadingView");

    if (state) {
        loadingView.style.display = 'flex';
        loadingView.classList.remove('animate__fadeOut');
    } else {
        loadingView.classList.add('animate__fadeOut');
        setTimeout(() => {
            loadingView.style.display = 'none';
        }, 600)
    }
}


window.onload = () => {
    setLoading(true)
    const selectLanguage = document.getElementById('languageSelect');
    selectLanguage.value = `${language}`;
    setTimeout(() => {
        setLoading(false)
        document.getElementById('msgSection').innerHTML = message
        document.getElementById('msgSection').classList.add('animate__fadeIn');
        document.getElementById('enquiryForm').innerHTML = form
    }, 300);
};


const phoneRegex = /^[6-9][0-9]{9}$/;

const getGeolocation = async () => {
    if (!navigator.geolocation) {
        console.log('Geolocation not enabled or supported');
        return null;
    }

    try {
        const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        return position;
    } catch (error) {
        console.error('Error getting geolocation', error);
        return null;
    }
};



const apiRoute = `https://api.d2f.co.in/api/`

const generateEnquiry = async (event) => {
    event.preventDefault();

    const inputs = document.querySelectorAll('#enquiryForm input');
    inputs.forEach(input => input.classList.remove('error'));

    const enquiryForm = document.getElementById('enquiryForm');
    const formValues = Object.fromEntries(new FormData(enquiryForm).entries());

    let isOk = true && formValues?.consent === 'on';

    // Validation functions
    const validateField = (fieldName, validationFn) => {
        const input = document.querySelector(`input[name="${fieldName}"]`);
        if (!validationFn(formValues[fieldName])) {
            isOk = false;
            input.classList.add('error');
        }
    };

    // Validation rules
    validateField('name', value => value.trim() !== "");
    validateField('phone', value => phoneRegex.test(value));
    validateField('address', value => value.trim() !== "");

    if (!formValues?.consent) {
        alert('Please accept the plocies first');
        return false;
    }

    if (isOk) {
        setLoading(true)

        const position = await getGeolocation();

        const lat = position?.coords?.latitude || '0';  // Fallback to '0' if no position
        const long = position?.coords?.longitude || '0'; // Fallback to '0' if no position

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...formValues,
                mobile: formValues?.phone,
                consent: formValues?.consent === 'on' ? '1' : '0',
                lat: `${lat}`,
                long: `${long}`,
            }),
            redirect: "follow"
        };

        try {
            const response = await fetch(`${apiRoute}save-service-inquiry`, requestOptions);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const result = await response.json();

            if (result?.status == 'success') {
                document.getElementById('modalContent').innerHTML = successMessage;
                document.getElementById('successModal').style.display = 'flex';

            } else {
                alert('something bad happened')
            }
            console.log(result)

        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false)
        }

    } else {
        console.log('error');
    }
}
