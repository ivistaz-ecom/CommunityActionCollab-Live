// components/ContactForm.js
'use client'
import { useState } from 'react';
import axios from 'axios';
import { Col, Row, Container } from 'react-bootstrap'
import { RotatingLines } from 'react-loader-spinner'
import configData from "../../config.json";

const ContactForm = () => {
    const opportunities = [
        { name: 'Call4Svasth' },
        { name: 'Economic Resilience' },
        { name: 'Street Vendors Well-Being & Resilience' },
        { name: 'Social Protection Help Desks' },
        {name:'Precision Health'}
]

    const countries = [
        { name: '	Afghanistan	' },
        { name: '	Aland Islands	' },
        { name: '	Albania	' },
        { name: '	Algeria	' },
        { name: '	American Samoa	' },
        { name: '	Andorra	' },
        { name: '	Angola	' },
        { name: '	Anguilla	' },
        { name: '	Antarctica	' },
        { name: '	Antigua & Barbuda	' },
        { name: '	Argentina	' },
        { name: '	Armenia	' },
        { name: '	Aruba	' },
        { name: '	Australia	' },
        { name: '	Austria	' },
        { name: '	Azerbaijan	' },
        { name: '	Bahamas	' },
        { name: '	Bahrain	' },
        { name: '	Bangladesh	' },
        { name: '	Barbados	' },
        { name: '	Belarus	' },
        { name: '	Belgium	' },
        { name: '	Belize	' },
        { name: '	Benin	' },
        { name: '	Bermuda	' },
        { name: '	Bhutan	' },
        { name: '	Bolivia	' },
        { name: '	Bosnia & Herzegovina	' },
        { name: '	Botswana	' },
        { name: '	Bouvet Island	' },
        { name: '	Brazil	' },
        { name: '	British Indian Ocean Territory	' },
        { name: '	British Virgin Islands	' },
        { name: '	Brunei	' },
        { name: '	Bulgaria	' },
        { name: '	Burkina Faso	' },
        { name: '	Burundi	' },
        { name: '	Cambodia	' },
        { name: '	Cameroon	' },
        { name: '	Canada	' },
        { name: '	Cape Verde	' },
        { name: '	Caribbean Netherlands	' },
        { name: '	Cayman Islands	' },
        { name: '	Central African Republic	' },
        { name: '	Chad	' },
        { name: '	Chile	' },
        { name: '	China	' },
        { name: '	Christmas Island	' },
        { name: '	Cocos (Keeling) Islands	' },
        { name: '	Colombia	' },
        { name: '	Comoros	' },
        { name: '	Congo - Brazzaville	' },
        { name: '	Congo - Kinshasa	' },
        { name: '	Cook Islands	' },
        { name: '	Costa Rica	' },
        { name: '	C√¥te d‚ÄôIvoire	' },
        { name: '	Croatia	' },
        { name: '	Cuba	' },
        { name: '	Cura√ßao	' },
        { name: '	Cyprus	' },
        { name: '	Czechia	' },
        { name: '	Denmark	' },
        { name: '	Djibouti	' },
        { name: '	Dominica	' },
        { name: '	Dominican Republic	' },
        { name: '	Ecuador	' },
        { name: '	Egypt	' },
        { name: '	El Salvador	' },
        { name: '	Equatorial Guinea	' },
        { name: '	Eritrea	' },
        { name: '	Estonia	' },
        { name: '	Eswatini	' },
        { name: '	Ethiopia	' },
        { name: '	Falkland Islands	' },
        { name: '	Faroe Islands	' },
        { name: '	Fiji	' },
        { name: '	Finland	' },
        { name: '	France	' },
        { name: '	French Guiana	' },
        { name: '	French Polynesia	' },
        { name: '	French Southern Territories	' },
        { name: '	Gabon	' },
        { name: '	Gambia	' },
        { name: '	Georgia	' },
        { name: '	Germany	' },
        { name: '	Ghana	' },
        { name: '	Gibraltar	' },
        { name: '	Greece	' },
        { name: '	Greenland	' },
        { name: '	Grenada	' },
        { name: '	Guadeloupe	' },
        { name: '	Guam	' },
        { name: '	Guatemala	' },
        { name: '	Guernsey	' },
        { name: '	Guinea	' },
        { name: '	Guinea-Bissau	' },
        { name: '	Guyana	' },
        { name: '	Haiti	' },
        { name: '	Heard & McDonald Islands	' },
        { name: '	Honduras	' },
        { name: '	Hong Kong SAR China	' },
        { name: '	Hungary	' },
        { name: '	Iceland	' },
        { name: '	India	' },
        { name: '	Indonesia	' },
        { name: '	Iran	' },
        { name: '	Iraq	' },
        { name: '	Ireland	' },
        { name: '	Isle of Man	' },
        { name: '	Israel	' },
        { name: '	Italy	' },
        { name: '	Jamaica	' },
        { name: '	Japan	' },
        { name: '	Jersey	' },
        { name: '	Jordan	' },
        { name: '	Kazakhstan	' },
        { name: '	Kenya	' },
        { name: '	Kiribati	' },
        { name: '	Kuwait	' },
        { name: '	Kyrgyzstan	' },
        { name: '	Laos	' },
        { name: '	Latvia	' },
        { name: '	Lebanon	' },
        { name: '	Lesotho	' },
        { name: '	Liberia	' },
        { name: '	Libya	' },
        { name: '	Liechtenstein	' },
        { name: '	Lithuania	' },
        { name: '	Luxembourg	' },
        { name: '	Macao SAR China	' },
        { name: '	Madagascar	' },
        { name: '	Malawi	' },
        { name: '	Malaysia	' },
        { name: '	Maldives	' },
        { name: '	Mali	' },
        { name: '	Malta	' },
        { name: '	Marshall Islands	' },
        { name: '	Martinique	' },
        { name: '	Mauritania	' },
        { name: '	Mauritius	' },
        { name: '	Mayotte	' },
        { name: '	Mexico	' },
        { name: '	Micronesia	' },
        { name: '	Moldova	' },
        { name: '	Monaco	' },
        { name: '	Mongolia	' },
        { name: '	Montenegro	' },
        { name: '	Montserrat	' },
        { name: '	Morocco	' },
        { name: '	Mozambique	' },
        { name: '	Myanmar (Burma)	' },
        { name: '	Namibia	' },
        { name: '	Nauru	' },
        { name: '	Nepal	' },
        { name: '	Netherlands	' },
        { name: '	New Caledonia	' },
        { name: '	New Zealand	' },
        { name: '	Nicaragua	' },
        { name: '	Niger	' },
        { name: '	Nigeria	' },
        { name: '	Niue	' },
        { name: '	Norfolk Island	' },
        { name: '	North Korea	' },
        { name: '	North Macedonia	' },
        { name: '	Northern Mariana Islands	' },
        { name: '	Norway	' },
        { name: '	Oman	' },
        { name: '	Pakistan	' },
        { name: '	Palau	' },
        { name: '	Palestinian Territories	' },
        { name: '	Panama	' },
        { name: '	Papua New Guinea	' },
        { name: '	Paraguay	' },
        { name: '	Peru	' },
        { name: '	Philippines	' },
        { name: '	Pitcairn Islands	' },
        { name: '	Poland	' },
        { name: '	Portugal	' },
        { name: '	Puerto Rico	' },
        { name: '	Qatar	' },
        { name: '	R√©union	' },
        { name: '	Romania	' },
        { name: '	Russia	' },
        { name: '	Rwanda	' },
        { name: '	Samoa	' },
        { name: '	San Marino	' },
        { name: '	S√£o Tom√© & Pr√≠ncipe	' },
        { name: '	Saudi Arabia	' },
        { name: '	Senegal	' },
        { name: '	Serbia	' },
        { name: '	Seychelles	' },
        { name: '	Sierra Leone	' },
        { name: '	Singapore	' },
        { name: '	Sint Maarten	' },
        { name: '	Slovakia	' },
        { name: '	Slovenia	' },
        { name: '	Solomon Islands	' },
        { name: '	Somalia	' },
        { name: '	South Africa	' },
        { name: '	South Georgia & South Sandwich Islands	' },
        { name: '	South Korea	' },
        { name: '	South Sudan	' },
        { name: '	Spain	' },
        { name: '	Sri Lanka	' },
        { name: '	St. Barth√©lemy	' },
        { name: '	St. Helena	' },
        { name: '	St. Kitts & Nevis	' },
        { name: '	St. Lucia	' },
        { name: '	St. Martin	' },
        { name: '	St. Pierre & Miquelon	' },
        { name: '	St. Vincent & Grenadines	' },
        { name: '	Sudan	' },
        { name: '	Suriname	' },
        { name: '	Svalbard & Jan Mayen	' },
        { name: '	Sweden	' },
        { name: '	Switzerland	' },
        { name: '	Syria	' },
        { name: '	Taiwan	' },
        { name: '	Tajikistan	' },
        { name: '	Tanzania	' },
        { name: '	Thailand	' },
        { name: '	Timor-Leste	' },
        { name: '	Togo	' },
        { name: '	Tokelau	' },
        { name: '	Tonga	' },
        { name: '	Trinidad & Tobago	' },
        { name: '	Tunisia	' },
        { name: '	Turkey	' },
        { name: '	Turkmenistan	' },
        { name: '	Turks & Caicos Islands	' },
        { name: '	Tuvalu	' },
        { name: '	U.S. Outlying Islands	' },
        { name: '	U.S. Virgin Islands	' },
        { name: '	Uganda	' },
        { name: '	Ukraine	' },
        { name: '	United Arab Emirates	' },
        { name: '	United Kingdom	' },
        { name: '	United States	' },
        { name: '	Uruguay	' },
        { name: '	Uzbekistan	' },
        { name: '	Vanuatu	' },
        { name: '	Vatican City	' },
        { name: '	Venezuela	' },
        { name: '	Vietnam	' },
        { name: '	Wallis & Futuna	' },
        { name: '	Western Sahara	' },
        { name: '	Yemen	' },
        { name: '	Zambia	' },
        { name: '	Zimbabwe	' },
        ]

    
    const [errors, setErrors] = useState({});
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [email, setEmail] = useState('');
    const [isNotEmpty, setIsNotEmpty] = useState(true);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        organisationName: '',
        country: '',
        opportunities: '',
        businessEmail: '',
        message: '',
    });
    const isBlank = (str) => {
        return !str.trim();
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
        setLoader(false);
    };

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [formVisible, setFormVisible] = useState(true);

    const handleChange = (e) => {

        const { name, value } = e.target;
        if (name === 'businessEmail') {
            setIsValidEmail(validateEmail(value));
        }

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isValidEmail) {
            setError('Please enter a valid email.');
            return;
        }
        setIsSubmitting(true);

        // if (isBlank(formData.firstName)) {
        //     setError('Please enter your name.');
        //     setIsSubmitting(false);
        //     return;
        // }
        // if (isBlank(formData.phone)) {
        //     setError('Please enter your phone number.');
        //     setIsSubmitting(false);
        //     return;
        // }
       

        // if (isBlank(formData.businessEmail)) {
        //     setError('Please enter a valid Email.');
        //     setIsSubmitting(false);
        //     return;
        // }
        // if (isBlank(formData.message)) {
        //     setError('Please enter a message.');
        //     setIsSubmitting(false);
        //     return;
        // }

        try {
const formDataObject = new FormData();
Object.entries(formData).forEach(([key, value]) => {
    formDataObject.append(key, value);
});
            const response = await axios.post(
                `${configData.SERVER_FROM}contact-form-7/v1/contact-forms/6499/feedback`,
                formDataObject,
                 {
                    headers: {
                        "Content-Type": 'multipart/form-data',
                    }
        
         
        });
            console.log(response.data.status);
            if (response.data.status === 'mail_sent') {
                setFormVisible(false); // Hide the form
                setSuccessMessage('Thank you for your submission!');
            } else {
                //setError('An error occurred. Please try again.');
                const fieldErrors = {};
                const { status, invalid_fields } = response.data;
                invalid_fields.forEach((field) => {
                    fieldErrors[field.field] = field.message;
                });
                setErrors(fieldErrors);
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        }

        setIsSubmitting(false);
    };

    return (
<div className="form-bg">
  {formVisible ? (           
<form onSubmit={handleSubmit} encType='multipart/form-data'>
<Row>
<Col lg={6} sm={12}>
<div className="mb-3">   
<label class="label-style form-label text-white fw-light">First Name</label>                                
<input
type="text"
name="firstName"
className={`form-control invt ${errors && errors.firstName ? 'is-invalid' : ''}`}
id="firstName"
value={formData.firstName}
onChange={handleChange}
/>
<span className='text-danger'>{ errors.firstName}</span>
</div>
</Col> 
<Col lg={6} sm={12}>
<div className="mb-3">   
<label class="label-style form-label text-white fw-light">Organisation Name</label>                                
<input
type="text"
name="organisationName"
className={`form-control invt ${errors && errors.organisationName ? 'is-invalid' : ''}`}
id="organisationName"
value={formData.organisationName}
onChange={handleChange}
                                />
                                <span className='text-danger'>{ errors.organisationName}</span>
</div>
</Col> 

</Row>
                    <Row>
<Col lg={6} sm={12}>
<div className="mb-3">
<label class="label-style form-label text-white fw-light">Last Name</label>
<input
type="text"
name="lastName"
className={`form-control invt ${errors && errors.lastName ? 'is-invalid' : ''}`}
id="lastName"                                
value={formData.lastName}
onChange={handleChange}
                                />
                            <span className='text-danger'>{ errors.lastName}</span>
                            </div>
                        </Col>
<Col lg={6} sm={12}>
<div className="mb-3">
<label class="label-style form-label text-white fw-light">Country</label>
                                <select className={`form-select invt ${errors && errors.country ? 'is-invalid' : ''}`} onChange={handleChange} name="country" value={formData.country}>
                                    <option value={null}>Select Country</option>
                                    {countries.map((country, index) => (
                                        <option key={index} value={country.name} >
                                            {country.name}
                                        </option>


                                    ))}
                                </select>  
                                <span className='text-danger'>{errors.country}</span>
                            </div>
                        </Col>
</Row>
                    
<Row>
<Col lg={6} sm={12}>
<div className="mb-3">
<label class="label-style form-label text-white fw-light">Investment Opportunites</label>
<select className={`form-select invt ${errors && errors.opportunities ? 'is-invalid' : ''}`} onChange={handleChange} name="opportunities" value={formData.opportunities}>
<option value={null}>Select Opportunity</option>
                                    {opportunities.map((investment, index) => (
                                        <option key={index} value={investment.name} >
                                            {investment.name}
                                        </option>
                                    ))}
                                </select>  


                            <span className='text-danger'>{ errors.opportunities}</span>
                            </div>
</Col>
<Col lg={6} sm={12}>
<div className="mb-3">
<label class="label-style form-label text-white fw-light">Email ID</label>
<input
type="text"
name="businessEmail"
className={`form-control invt ${errors && errors.businessEmail ? 'is-invalid' : ''}`}
id="businessEmail"                                
value={formData.businessEmail}
onChange={handleChange}
                                />
                            <span className='text-danger'>{ errors.businessEmail}</span>
                            </div>
</Col>
</Row>
<Row>
<Col lg={12} sm={12}>
<div className="mb-3">
<label class="label-style form-label text-white fw-light">Message</label>
<textarea
type="text"
name="message"
className={`form-control invt-msg ${errors && errors.message ? 'is-invalid' : ''}`}
id="message"                                 
value={formData.message}
onChange={handleChange}
rows="4" cols="50"                                 
/> <span className='text-danger'>{ errors.message}</span>                         
</div>                                
</Col>
</Row>
<Row className='text-center'><Col sm={12}>
<button type="submit" className="btn btn-warning px-5 p-2 rounded-0" disabled={isSubmitting}>
SUBMIT
                            { isSubmitting &&
                                <RotatingLines
                                    strokeColor="white"
                                    strokeWidth="3"
                                    animationDuration="1"
                                    width="20"
                                    visible={true}
                                />
                            }
</button>
                   
                    </Col></Row>
{error && <span className="error text-danger">{error}</span>}
</form>
            ) : (
<Container className="mt-5 main-color">
<h3 className="fs-1 text-white text-center">Thank you,</h3>
<h3 className="fs-4 text-white text-center fw-light">We will get in touch with you as soon as possible.</h3>
                        
</Container>
            )}
</div>
    );
};

export default ContactForm;
