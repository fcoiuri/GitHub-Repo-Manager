'use client';
import React, { useState } from 'react';
import { FavoriteSVG } from '@/assets';
import { FavoritedSVG } from '@/assets';

interface FavoriteButtonProps {
  repoFullName: string;
  initialStatus: boolean;
}

const FavoriteButton = ({
  repoFullName,
  initialStatus,
}: FavoriteButtonProps) => {
  const [isStarred, setIsStarred] = useState(initialStatus);
  const [loading, setLoading] = useState(false);

  const toggleFavorite = async () => {
    setIsStarred((prev) => !prev);
    setLoading(true);
    try {
      const response = await fetch(
        `/api/toggleFavorite?repo=${encodeURIComponent(
          repoFullName
        )}&currentStatus=${isStarred}`,
        { method: 'POST' }
      );
      if (!response.ok) {
        setIsStarred((prev) => !prev);
        console.error('Failed to toggle favorite status');
      }
    } catch (error) {
      setIsStarred((prev) => !prev);
      console.error('Error toggling favorite:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={toggleFavorite}
      type="button"
      aria-label={isStarred ? 'Remover repositório' : 'Favoritar repositório'}
      disabled={loading}
    >
      {isStarred ? (
        <div className="flex justify-center items-center border-[1px] border-[#32C0C6] w-[40px] h-[40px] rounded-full">
          <FavoritedSVG />
        </div>
      ) : (
        <div className="flex justify-center items-center bg-[#F3F3F5] w-[40px] h-[40px] rounded-full">
          <FavoriteSVG />
        </div>
      )}
    </button>
  );
};

export default FavoriteButton;
