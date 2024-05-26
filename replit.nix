{ pkgs }: {
  deps = [
    pkgs.imagemagick
    pkgs.ffmpeg-full
    pkgs.nodejs
    pkgs.nodePackages.npm
  ];
}