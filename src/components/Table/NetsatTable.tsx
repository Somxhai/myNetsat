import { getAllCapabilityWeight } from "../../features/EssentialFeatures";
import { NetsatTableData } from "../template/Table";
import { NetsatTableType } from "../../Types/TableType";



export const NetsatTable = ({ data }: NetsatTableType) => {
  
  return (
    <div
      className={`text-center w-fit my-2 ${
        data.has_specific_capability ? "border-r-2" : ""
      }`}
    >
      <p className="px-3">คะแนน Netsat</p>
      <table className="text-center">
        <thead>
          <tr>
            <th className="p-3">วิชา</th>
            <th className="p-3">%</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data.weight)
            .filter((v) => {
              const score = data.weight[v as keyof typeof data.weight];
              if (score != 0) return v;
            })
            .map((v) => {
              const score = data.weight[v as keyof typeof data.weight];
              const formatKey = `${data.syllabus_id}_${v}`;
              return (
                <NetsatTableData title={v} score={score} key={formatKey} />
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
export const CapabilityTable = ({ data }: NetsatTableType) => {
  return (
    <div className="text-center w-fit my-2">
      <p className="px-3">คะแนนสมรรถนะเฉพาะ</p>
      <table className="text-center">
        <thead>
          <tr>
            <th className="p-3">สมรรถนะ</th>
            <th className="p-3">%</th>
          </tr>
        </thead>
        <tbody>
          {getAllCapabilityWeight(data).map(([k, v]) => {
            const formatKey = `${data.syllabus_id}_${k}`;
            return <NetsatTableData title={k as string} score={v as number} capabilityData={true} key={formatKey}/>
          })}
        </tbody>
      </table>
    </div>
  );
};
