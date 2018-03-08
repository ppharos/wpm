/**
 * The wine & painting match loader.
 */
import { Component, PropTypes } from 'react';
// import '../styles/sharer.scss';

//  Import icons
import Facebook from 'react-icons/lib/fa/facebook';
import WhatsApp from 'react-icons/lib/fa/whatsapp';
import Twitter from 'react-icons/lib/fa/twitter';
import Email from 'react-icons/lib/fa/envelope-o';

//  Get the current url (in the future to be from the db)
const matchUrl = 'https://www.theguardian.com/uk';

export class Sharer extends Component {
  constructor(props) {
    super(props);
    this.sendEmail = this.sendEmail.bind(this);
  }
  /** Shares the current match on social media. */
  shareSocial(site, e) {
    e.preventDefault();

    //  Assign the url
    var socialUrl;

    //  For some weird reason it doesn't get this otoh works
    switch (site) {
      case 'fb':
        socialUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + matchUrl;
        break;
      case 'wa':
        socialUrl = '"whatsapp://send?text=' + matchUrl;
        break;
      case 'twitter':
        socialUrl = 'https://twitter.com/share?url=' + matchUrl;
        break;
    }
    // console.log(socialUrl);
    //  Open the window
    window.open(socialUrl, 'sharer', 'height=350,width=600');
    if (window.focus) {
      window.focus();
    }
    return false;
  }

  /** Opens the email client to send a link with the match. */
  sendEmail() {
    var eSubject = 'Wine%20and%20Painting%20Matching';
    var eBody = 'Check%20out%20this%20wine%20and%20painting%20match!%20';

    var refText = 'mailto:?to=&subject=' + eSubject + '&body=' + eBody + matchUrl;

    // console.log(refText);

    return refText;
  }

  render() {
    return (
      <div>
        <h2 className="match underlined" onClick={this.latestMatch}>
          Latest Match
        </h2>
        <ul className="contact">
          <li>
            <Facebook onClick={this.shareSocial.bind(this, 'fb')} />
          </li>
          <li>
            <WhatsApp onClick={this.shareSocial.bind(this, 'wa')} />
          </li>
          <li>
            <Twitter onClick={this.shareSocial.bind(this, 'twitter')} />
          </li>
          <li>
            <a href={this.sendEmail()}>
              <Email />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
