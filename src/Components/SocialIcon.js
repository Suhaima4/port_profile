import React from 'react';
import PropTypes from 'prop-types';

function SocialIcon({ href, Icon, alt, className }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={alt} className={className}>
      <Icon size={40} className="social-icon" />
    </a>
  );
}

SocialIcon.propTypes = {
  href: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};



export default SocialIcon;