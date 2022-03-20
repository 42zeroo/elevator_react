import React, { useState, useRef, useEffect, useContext } from "react";
import BuildingFloor from "components/atoms/BuildingFloor";
import Wall from "components/atoms/Wall";
import { ElevatorsContext } from "components/organisms/Building";
import {
    Window,
    Elevator,
    ActiveElevatorsWrapper,
    ActiveElevator,
} from "./Components";

const BuildingWall = ({ displayElevators, floors, className }) => {
    const wallRef = useRef(null);
    const elevators = useContext(ElevatorsContext);
    const [floorsYPosition, setFloorsYPosition] = useState([]);
    const [wallSize, setWallSize] = useState({ width: 0, height: 0 });
    const [isTransition, setIsTransition] = useState(false);
    const [targetFloors, setTargetFloors] = useState([])

    useEffect(() => {
        if (typeof document !== "undefined")
            if (typeof wallRef?.current?.childNodes !== "undefined") {
                setFloorsYPosition(
                    [...wallRef.current.childNodes].map((c) => c.offsetTop).reverse()
                );
                setWallSize({
                    width: wallRef?.current?.clientWidth,
                    height: wallRef?.current?.clientHeight,
                });
                setTargetFloors(
                    [...elevators.map(e => e?.targetFloor)]
                )
                setTimeout(() => setIsTransition(true), 1000);
            }
    }, [elevators]);

    return (
        <Wall ref={wallRef} className={className}>
            {displayElevators && (
                <ActiveElevatorsWrapper
                    data_height={wallSize.height}
                    data_width={wallSize.width}
                >
                    {elevators.map((e) => (
                        <ActiveElevator
                            key={e.uuid}
                            isTransition={isTransition}
                            data_active_offset_top={floorsYPosition[e.level]}
                        />
                    ))}
                </ActiveElevatorsWrapper>
            )}
            {floors
                .map((f, floorIndex) => (
                    <BuildingFloor key={f.uuid}>
                        {elevators.map((e, i) =>
                            displayElevators ?
                                <Elevator
                                    key={i + "-" + e.uuid}
                                    data_isActive={targetFloors[i] === floorIndex}
                                />
                                : <Window key={`${i}-${e.uuid}`} />
                        )}
                    </BuildingFloor>
                ))
                .reverse()}
        </Wall>
    );
};

export default BuildingWall;
