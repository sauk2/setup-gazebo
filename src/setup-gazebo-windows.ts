import * as utils from "./utils";
import * as conda from "./package_manager/conda";

/**
 * Install Gazebo on a Windows worker
 */
export async function runWindows(): Promise<void> {
	const gazeboDistros = await utils.getRequiredGazeboDistributions();

	for (const gazeboDistro of gazeboDistros) {
		await conda.runConda([`gz-${gazeboDistro}`]);
	}
}
