import SubjectInput from "../SubjectInput";


const NetsatForm = () => {
    return (<form
        id="input-form"
        className="text-secondary text-sm pt-3 pb-9 m-auto text-center"
      >
        <p className="text-xl text-gray-700 mt-5">ความฉลาดรู้ทั่วไป</p>
        <SubjectInput title="ภาษาไทย" id="thai" />
        <SubjectInput title="ภาษาอังกฤษ" id="eng" />
        <SubjectInput title="คณิตศาสตร์" id="math" />
        <p className="text-xl text-gray-700 mt-5">ความฉลาดรู้เฉพาะ</p>
        <SubjectInput title="วิทยาศาสตร์และเทคโนโลยี" id="sci" />
        <SubjectInput title="เคมี" id="chem" />
        <SubjectInput title="ชีววิทยา" id="bio" />
        <SubjectInput title="ฟิสิกส์" id="phy" />
      </form>)
}
export default NetsatForm;