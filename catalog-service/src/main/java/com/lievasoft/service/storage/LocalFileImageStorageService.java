package com.lievasoft.service.storage;

import com.lievasoft.dto.mapping.UploadImageResponse;
import jakarta.enterprise.context.ApplicationScoped;
import org.jboss.logging.Logger;
import org.jboss.resteasy.reactive.multipart.FileUpload;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

@ApplicationScoped
public class LocalFileImageStorageService implements ImageStorageService {

    private static final String FOLDER_IMAGE = "/Users/josmaria/Pictures/plant_images";
    private static final Logger LOG = Logger.getLogger(LocalFileImageStorageService.class);

    @Override
    public UploadImageResponse uploadImageToFileSystem(Long plantId, FileUpload imageUpload) {
        Path filePath = imageUpload.uploadedFile();
        if (filePath != null && Files.exists(filePath)) {
            try {
                Path directoryPath = Paths.get(FOLDER_IMAGE, "plant_%s".formatted(plantId));
                if (!Files.exists(directoryPath))
                    Files.createDirectories(directoryPath);

                var filename = UUID.randomUUID() + getValidExtension(imageUpload.contentType());
                var filePathToUpload = directoryPath.resolve(filename);
                Thread.ofVirtual().start(() -> {
                    try {
                        byte[] imageBytes = Files.readAllBytes(filePath);
                        Files.write(filePathToUpload, imageBytes);
                        LOG.infof("Virtual Thread name: %s", Thread.currentThread().getName());
                        var message = "Image saved in filesystem at directory: %s, filename: %s";
                        LOG.infof(message, directoryPath, filename);
                    } catch (IOException exception) {
                        LOG.error(exception.getMessage());
                    }
                });
                return new UploadImageResponse(directoryPath.toString(), filename);
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        } else throw new IllegalArgumentException("Image file path is invalid");
    }

    private String getValidExtension(String contentType) {
        boolean isValid = switch (contentType) {
            case "image/webp", "image/gif", "image/png", "image/jpeg", "image/jpg" -> true;
            default -> false;
        };

        if (isValid) {
            return "." + contentType.split("/")[1];
        } else throw new IllegalArgumentException("Content type: %s doesn't valid".formatted(contentType));
    }

    @Override
    public byte[] downloadImageFromFileSystem(String filename, String directoryPath) {
        var imagePath = Paths.get(directoryPath, filename);
        var file = new File(imagePath.toString());
        if (file.exists()) {
            try {
                return Files.readAllBytes(file.toPath());
            } catch (IOException e) {
                throw new IllegalArgumentException(e);
            }
        } else throw new IllegalArgumentException("Image file not found");
    }
}
