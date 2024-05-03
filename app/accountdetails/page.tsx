import Link from 'next/link';
import styles from 'AccountDetails.module.css'
import AccountNav from '../components/accountSideNav/accountSideNav';

export default function AccountDetails() {
    return (
        <section id="account">
            <div className='container'>
            <AccountNav/>
            <div className='accountDetails'>
                <h1>Details</h1>
                <form className='basic' action='/accountdetails'method='post'>
                <h3>Basic Info</h3>
                <div className='basicContent'>
                    <div id='basicFirstName' className='basicGroup'>
                        <label htmlFor="firstName">First Name</label>
                        <input className="input" type="text" id="firstName" />
                    </div>

                    <div id='basicLastName' className='basicGroup'>
                        <label htmlFor="lastName">Last Name</label>
                        <input className="input" type="text" id="lastName" />
                    </div>

                    <div id="basicEmail" className= 'basicGroup'>
                        <label htmlFor="email">Email</label>
                        <input className="input" type="email" id="email" />
                    </div>

                    <div id='basicPhone' className='basicGroup'>
                        <label htmlFor="phone">Phone Number</label>
                        <input className='input' type="text" id='phone' />
                    </div>

                    <div id="basicBio" className="basicGroup">
                        <div className="opt">
                        <label htmlFor='bio'>Bio</label>
                        <p className="bio"> (optional)</p>
                        </div>
                        <textarea className="bioInput"></textarea>
                        </div>
                </div>
                <div className="basic-buttons">
                    <button className="btn-gray" type="reset">Cancel</button>
                    <button className="btn-theme" type="submit">Save Changes</button>
                </div>
                </form>
            </div>

            </div>
        
        </section>
       
        
        
    )};