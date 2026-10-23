import React, { useState } from 'react'
import './RecruiterRegistration.css'
import platformLogoIcon from '../../assets/images/platformLogoIcon.png'
import registrationIllustration from '../../assets/images/registrationIllustration.png'
import secureShieldIcon from '../../assets/images/secureShieldIcon.png'

const roleOptions = ['Company', 'Student', 'Institution']

const initialFormData = {
  role: 'Company',
  fullName: '',
  emailAddress: '',
  mobileNumber: '',
  jobTitle: '',
  companyName: '',
  companyLocation: '',
  companyWebsite: '',
  industryType: '',
  password: '',
  confirmPassword: '',
}

const RecruiterRegistration = () => {
  const [formData, setFormData] = useState(initialFormData)
  const [isTermsAccepted, setIsTermsAccepted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((previousData) => ({ ...previousData, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match')
      return
    }
    if (!isTermsAccepted) {
      setErrorMessage('Please accept the terms of service and privacy policy')
      return
    }

    setErrorMessage('')
    console.log('Registration data', formData)
  }

  return (
    <div className="recruiterRegistration-page">
      <div className="recruiterRegistration-content">
      <section className="recruiterRegistration-leftPanel">
        <div className="recruiterRegistration-brand">
          <img
            className="recruiterRegistration-brandIcon"
            src={platformLogoIcon}
            alt="Platform logo"
          />
          <div className="recruiterRegistration-brandText">
            <h2 className="recruiterRegistration-brandTitle">
              AI Education &amp; Workforce Development Platform
            </h2>
            <p className="recruiterRegistration-brandTagline">
              Connect • Discover • Succeed
            </p>
          </div>
        </div>

        <div className="recruiterRegistration-hero">
          <h1 className="recruiterRegistration-heroTitle">
            Manage Placements.
            <br />
            Create Opportunities.
          </h1>
          <p className="recruiterRegistration-heroSubtitle">
            Streamline training, placement activities and recruitment
            coordination - all in one platform.
          </p>
        </div>

        <img
          className="recruiterRegistration-illustration"
          src={registrationIllustration}
          alt="People connecting through mobile devices"
        />

        <div className="recruiterRegistration-secureCard">
          <img
            className="recruiterRegistration-secureIcon"
            src={secureShieldIcon}
            alt="Secure"
          />
          <span className="recruiterRegistration-secureDivider"></span>
          <div className="recruiterRegistration-secureText">
            <p className="recruiterRegistration-secureTitle">
              Secure Today. Ready for Tomorrow.
            </p>
            <p className="recruiterRegistration-secureSubtitle">
              Securely connect students, institutions, and employers on one
              platform.
            </p>
          </div>
        </div>
      </section>

      <section className="recruiterRegistration-rightPanel">
        <form className="recruiterRegistration-form" onSubmit={handleSubmit}>
          <div className="recruiterRegistration-formHeading">
            <h2 className="recruiterRegistration-formTitle">Your Journey Starts Here</h2>
            <p className="recruiterRegistration-formSubtitle">
              Join our ecosystem of professional employers.
            </p>
          </div>

          <div className="recruiterRegistration-field recruiterRegistration-fieldFull">
            <label className="recruiterRegistration-label" htmlFor="role">
              Select your role
            </label>
            <div className="recruiterRegistration-selectWrap">
              <select
                id="role"
                name="role"
                className="recruiterRegistration-select"
                value={formData.role}
                onChange={handleChange}
              >
                {roleOptions.map((roleName) => (
                  <option key={roleName} value={roleName}>
                    {roleName}
                  </option>
                ))}
              </select>
              <span className="recruiterRegistration-selectArrow"></span>
            </div>
          </div>

          <div className="recruiterRegistration-row">
            <div className="recruiterRegistration-field">
              <label className="recruiterRegistration-label" htmlFor="fullName">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                className="recruiterRegistration-input"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="recruiterRegistration-field">
              <label className="recruiterRegistration-label" htmlFor="emailAddress">
                Email Address
              </label>
              <input
                id="emailAddress"
                name="emailAddress"
                type="email"
                className="recruiterRegistration-input"
                placeholder="Enter your email address"
                value={formData.emailAddress}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="recruiterRegistration-row">
            <div className="recruiterRegistration-field">
              <label className="recruiterRegistration-label" htmlFor="mobileNumber">
                Mobile Number
              </label>
              <input
                id="mobileNumber"
                name="mobileNumber"
                type="tel"
                className="recruiterRegistration-input"
                placeholder="123567890"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="recruiterRegistration-field">
              <label className="recruiterRegistration-label" htmlFor="jobTitle">
                Designations / Job Title
              </label>
              <input
                id="jobTitle"
                name="jobTitle"
                type="text"
                className="recruiterRegistration-input"
                placeholder="UI/UX Designer"
                value={formData.jobTitle}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="recruiterRegistration-row">
            <div className="recruiterRegistration-field">
              <label className="recruiterRegistration-label" htmlFor="companyName">
                Company Name
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                className="recruiterRegistration-input"
                placeholder="Adhway Creation"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="recruiterRegistration-field">
              <label className="recruiterRegistration-label" htmlFor="companyLocation">
                Company Location
              </label>
              <input
                id="companyLocation"
                name="companyLocation"
                type="text"
                className="recruiterRegistration-input"
                placeholder="Coimbatore"
                value={formData.companyLocation}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="recruiterRegistration-row">
            <div className="recruiterRegistration-field">
              <label className="recruiterRegistration-label" htmlFor="companyWebsite">
                Company Website
              </label>
              <input
                id="companyWebsite"
                name="companyWebsite"
                type="text"
                className="recruiterRegistration-input"
                placeholder="www.adhway.com"
                value={formData.companyWebsite}
                onChange={handleChange}
              />
            </div>
            <div className="recruiterRegistration-field">
              <label className="recruiterRegistration-label" htmlFor="industryType">
                Industry Type
              </label>
              <input
                id="industryType"
                name="industryType"
                type="text"
                className="recruiterRegistration-input"
                placeholder="Designer"
                value={formData.industryType}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="recruiterRegistration-row">
            <div className="recruiterRegistration-field">
              <label className="recruiterRegistration-label" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="recruiterRegistration-input"
                placeholder="**********"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="recruiterRegistration-field">
              <label className="recruiterRegistration-label" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                className="recruiterRegistration-input"
                placeholder="**********"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <label className="recruiterRegistration-terms">
            <input
              type="checkbox"
              className="recruiterRegistration-checkbox"
              checked={isTermsAccepted}
              onChange={(event) => setIsTermsAccepted(event.target.checked)}
            />
            <span className="recruiterRegistration-termsText">
              I agree to the{' '}
              <a className="recruiterRegistration-termsLink" href="#terms">
                Terms of service
              </a>{' '}
              and{' '}
              <a className="recruiterRegistration-termsLink" href="#privacy">
                privacy policy
              </a>{' '}
              regarding my administrative access.
            </span>
          </label>

          {errorMessage && (
            <p className="recruiterRegistration-error">{errorMessage}</p>
          )}

          <button type="submit" className="recruiterRegistration-submitButton">
            Complete Registration
          </button>

          <p className="recruiterRegistration-loginText">
            Already have an account?{' '}
            <a className="recruiterRegistration-loginLink" href="#login">
              Login
            </a>
          </p>
        </form>
      </section>
      </div>
    </div>
  )
}

export default RecruiterRegistration
