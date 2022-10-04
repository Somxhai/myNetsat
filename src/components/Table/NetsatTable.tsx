import { getAllCapabilityWeight } from "../../features/EssentialFeatures";
import { ValTypeArgument } from "../../Types/ArgumentType";
import { NetsatTableData } from "../template/Table";

export const NetsatTable = ({ data }: ValTypeArgument) => {
  return (
    <main
      className={`text-center w-fit my-2 m-auto ${
        data.has_specific_capability ? "md:border-r-2" : ""
      }`}
    >
      <p className="px-3">คะแนน Netsat</p>
      <table className="text-center">
        <thead>
          <tr>
            <th className="p-3">วิชา</th>
            <th className="p-3">%</th>
            {data.has_minimum_score && <th className="p-3">คะแนนขั้นต่ำ</th>}
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
              const minScore =
                data.has_minimum_score && data.minimum_score != null
                  ? data.minimum_score[v as keyof typeof data.minimum_score]
                  : null;
              const formatKey = `${data.syllabus_id}_${v}`;
              return (
                <NetsatTableData
                  title={v}
                  score={score}
                  key={formatKey}
                  minScore={minScore}
                />
              );
            })}
        </tbody>
      </table>
    </main>
  );
};
export const CapabilityTable = ({ data }: ValTypeArgument) => {
  return (
    <main className="text-center w-fit m-auto my-2">
      <p className="px-3">คะแนนสมรรถนะเฉพาะ</p>
      <table className="text-center">
        <thead>
          <tr>
            <th className="p-3">สมรรถนะ</th>
            <th className="p-3">%</th>
            {data.has_minimum_score && <th className="p-3">คะแนนขั้นต่ำ</th>}
          </tr>
        </thead>
        <tbody>
          {getAllCapabilityWeight(data).map(([k, v]) => {
            const formatKey = `${data.syllabus_id}_${k}`;
            const minScore =
              data.has_minimum_score && data.minimum_score != null
                ? data.minimum_score[k as keyof typeof data.minimum_score]
                : null;
            return (
              <NetsatTableData
                title={k as string}
                score={v as number}
                minScore={minScore}
                capabilityData={true}
                key={formatKey}
              />
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
