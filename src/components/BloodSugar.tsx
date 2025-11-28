import { formatDistanceToNowStrict } from "date-fns";
import {
    ArrowDownIcon,
    ArrowDownRightIcon,
    ArrowRightIcon,
    ArrowUpRightIcon,
    ArrowUpIcon,
    ExclamationTriangleIcon,
} from "@heroicons/react/16/solid";
import type { BGData } from "../types";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Button } from "./ui/button";
import { TooltipProvider } from "@radix-ui/react-tooltip";

export function BloodSugar({
    bgData,
    color,
}: {
    bgData: BGData;
    color: string;
}) {
    const relativeBgDate = formatDistanceToNowStrict(new Date(bgData.displayTime), {
        addSuffix: true,
    });

    const directions = {
        doubleUp: (
            <>
                <ArrowUpIcon className="w-6 h-6" />
                <ArrowUpIcon className="w-6 h-6" />
            </>
        ),
        singleUp: <ArrowUpIcon className="w-6 h-6" />,
        fortyFiveUp: <ArrowUpRightIcon className="w-6 h-6" />,
        flat: <ArrowRightIcon className="w-6 h-6" />,
        fortyFiveDown: <ArrowDownRightIcon className="w-6 h-6" />,
        singleDown: <ArrowDownIcon className="w-6 h-6" />,
        doubleDown: (
            <>
                <ArrowDownIcon className="w-6 h-6" />
                <ArrowDownIcon className="w-6 h-6" />
            </>
        ),
        none: <ExclamationTriangleIcon className="w-6 h-6" />,
        notComputable: <ExclamationTriangleIcon className="w-6 h-6" />,
        rateOutOfRange: <ExclamationTriangleIcon className="w-6 h-6" />,
    };

    return (
        <TooltipProvider delayDuration={200}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button className={color}>
                    🩸
                        {isNaN(bgData.value) ? "Error" : bgData.value}
                        {directions[bgData.trend]}
                    </Button>
                </TooltipTrigger>

                <TooltipContent>
                    <p>{relativeBgDate}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}
