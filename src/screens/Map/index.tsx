import React, { useState, useEffect, useCallback } from 'react';
import GoogleMapReact from 'google-map-react';

import api from '../../services/api';
import { Container } from './styles';

interface PointResidence {
  id: number;
  latitude: number;
  longitude: number;
  residents: number;
}

interface PositionProps {
  lat: number;
  lng: number;
}

interface HeatMapProps {
  positions: PositionProps[];
  options: {
    radius: number;
    opacity: number;
  };
}

const Map: React.FC = () => {
  const [initialPosition, setInitialPosition] = useState<[number, number]>([
    0,
    0,
  ]);
  const [pointsHeatMap, setPointsHeatMap] = useState<HeatMapProps>(
    {} as HeatMapProps,
  );

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;

      setInitialPosition([latitude, longitude]);
    });
  }, []);

  const loadPointsResidences = useCallback(async () => {
    const { data } = await api.get('/residences');

    const positions: PositionProps[] = [];

    data.forEach((point: PointResidence) => {
      for (let i = 0; i < point.residents; i++) {
        positions.push({
          lat: Number(point.latitude),
          lng: Number(point.longitude),
        });
      }
    });

    setPointsHeatMap({
      positions,
      options: {
        radius: 30,
        opacity: 0.8,
      },
    });
  }, []);

  useEffect(() => {
    loadPointsResidences();
  }, [loadPointsResidences]);

  return (
    <Container>
      {initialPosition[0] !== 0 && initialPosition[1] !== 0 && (
        <>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: String(process.env.REACT_APP_GOOGLE_API_KEY),
            }}
            defaultCenter={{ lat: initialPosition[0], lng: initialPosition[1] }}
            defaultZoom={12}
            heatmapLibrary
            heatmap={pointsHeatMap}
          />
        </>
      )}
    </Container>
  );
};

export default Map;
