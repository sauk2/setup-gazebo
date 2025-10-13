import * as utils from "./utils";
import * as conda from "./package_manager/conda";

/**
 * Install Gazebo on a Windows worker
 */
export async function runWindows(): Promise<void> {
	const gazeboDistros = await utils.getRequiredGazeboDistributions();

	for (const gazeboDistro of gazeboDistros) {
		const envName = process.env["CONDA_ENV_NAME"] || "gz_env";
		await conda.activateEnv(envName);

		await conda.runConda([`gz-${gazeboDistro}`]);
	}
}
