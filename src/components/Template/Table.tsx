import {
  checkCapabilitySubject,
  checkNetsatSubject,
} from "../../features/EssentialFeatures";
import { TableDataType } from "../../Types/TableType";

export const NetsatTableData = ({
  title,
  score,
  capabilityData,
  minScore,
}: TableDataType) => {
  return (
    <tr>
      <td className="px-3 text-text_primary">
        {capabilityData
          ? checkCapabilitySubject(title)
          : checkNetsatSubject(title)}
      </td>
      <td className="px-3 text-text_secondary">{score}</td>
      <td className="px-3 text-text_secondary">{minScore ?? null}</td>
    </tr>
  );
};
