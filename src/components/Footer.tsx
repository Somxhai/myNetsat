const Footer = () => {
  return (
    <footer className="text-text_secondary text-center pb-3 text-xs mt-12 md:text-base">
      <ul className="flex m-auto justify-center space-x-3">
        <li className="hover:text-text_primary">
          <a target="_blank" href="https://bio.link/somxhai" title="ติดต่อเจ้าของเว็บไซต์">
            ติดต่อ
          </a>
        </li>
        <li className="hover:text-text_primary">
          <a
            title="เกณฑ์คะแนน มข"
            target="_blank"
            href="https://admissions.kku.ac.th/kkuquota66/"
          >
            ข้อมูลอ้างอิง
          </a>
        </li>
        <li className="hover:text-text_primary">
          <a target="_blank" href="https://www.buymeacoffee.com/Somxhai" title="สนับสนุนผ่าน BuyMeACoffee">
            สนับสนุน
          </a>
        </li>
        <li className="hover:text-text_primary">
          <a target="_blank" href="https://github.com/Somxhai/NetsatAPI" title="ใช้ API คะแนน Netsat">
            API
          </a>
        </li>
      </ul>
      <p className="mt-3">Made by Somxhai</p>
    </footer>
  );
};
export default Footer;
