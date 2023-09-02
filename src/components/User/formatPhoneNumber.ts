export const formatPhoneNumber = (phoneNumber: string) => {
  const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');
  if (!/^\d+$/.test(cleanedPhoneNumber)) {
    return cleanedPhoneNumber;
  }
  const match = cleanedPhoneNumber.match(
    /^(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/
  );
  if (match) {
    const formattedPhoneNumber = `(${match[1]}) ${match[2]}-${match[3]}-${match[4]}`;
    return formattedPhoneNumber.trim();
  }
  return cleanedPhoneNumber;
};
