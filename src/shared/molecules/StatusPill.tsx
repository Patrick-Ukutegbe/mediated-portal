import { Colors, Typography } from "@Coronation-ArchTouch/cor-ui";
import { Icon } from "@Coronation-ArchTouch/cor-ui-icons";

const StatusPill = ({ status }: { status: string }) => {
    switch (status) {
        case "success":
            return <Typography style={{ color: "#00782E", background: "#E6F5EB" }} className="inline-flex items-center px-2.5 py-0.5 rounded-[6px] !text-xs font-medium gap-[4px]">
                Approved
                <Icon icon="check-circle" variant="outline" color="#00782E" size="12px" />
            </Typography>;
        case "failed":
            return <Typography style={{ color: Colors.primary.error.red600, background: Colors.primary.error.red50 }} className="inline-flex items-center px-2.5 py-0.5 rounded-[6px] !text-xs font-medium gap-[4px]">
                Rejected
                <Icon icon="warning-circle" variant="outline" color={Colors.primary.error.red600} size="12px" />
            </Typography>;
        default:
            return <Typography style={{ color: Colors.primary.warning.yellow600, background: Colors.primary.warning.yellow50 }} className="inline-flex items-center px-2.5 py-0.5 rounded-[6px] !text-xs font-medium gap-[4px]">
                Pending
                <Icon icon="clock-countdown" variant="outline" color={Colors.primary.warning.yellow600} size="12px" />
            </Typography>;
    }
};

export default StatusPill;
