const ContactForm = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.6345741836612!2d121.00335179999998!3d14.619881000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b610e770f735%3A0x9bc0b1b9065caf43!2sBarangay%20Sta.%20Teresita!5e0!3m2!1sen!2sph!4v1782122346226!5m2!1sen!2sph"
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Location Map"
      className="rounded-lg"
    />
  );
};

export default ContactForm;